
// Edge function that demonstrates API caching
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.1'

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// TTL mapping for different endpoint types
const TTL_CONFIG = {
  static: 3600, // 1 hour for static data
  dynamic: 300, // 5 minutes for dynamic data
  user: 60,     // 1 minute for user-specific data
}

// Mock Redis-like implementation using Deno.KV
// In a real implementation, use Redis or a similar caching service
let cache = new Map()

// Create a cache key
const createCacheKey = (url: string, params: any) => {
  return `cache:${url}:${JSON.stringify(params || {})}`
}

// Store data in cache
const setCache = async (key: string, data: any, ttl: number) => {
  cache.set(key, {
    data,
    expires: Date.now() + (ttl * 1000)
  })
  
  // Delete after TTL in a real implementation
  setTimeout(() => {
    if (cache.has(key)) {
      cache.delete(key)
    }
  }, ttl * 1000)
}

// Get data from cache
const getCache = (key: string) => {
  const item = cache.get(key)
  if (!item) return null
  
  if (Date.now() > item.expires) {
    cache.delete(key)
    return null
  }
  
  return item.data
}

// Mock API data fetching
const fetchDataFromAPI = async (endpoint: string, params: any) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Mock data based on endpoint
  switch (endpoint) {
    case 'weather':
      return {
        location: params.city || 'New York',
        temperature: 72 + Math.floor(Math.random() * 10),
        condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)],
        timestamp: new Date().toISOString()
      }
    case 'stocks':
      return {
        symbol: params.symbol || 'AAPL',
        price: 150 + Math.floor(Math.random() * 10),
        change: (Math.random() * 5 - 2.5).toFixed(2),
        timestamp: new Date().toISOString()
      }
    default:
      return {
        message: 'Unknown endpoint',
        params
      }
  }
}

// Record metrics in Supabase
const recordMetrics = async (endpoint: string, isHit: boolean) => {
  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )
    
    // Check if metrics exist for this endpoint
    const { data: existing } = await supabaseClient
      .from('cache_metrics')
      .select()
      .eq('endpoint', endpoint)
      .maybeSingle()
      
    if (existing) {
      // Update existing metric
      await supabaseClient
        .from('cache_metrics')
        .update({
          hit: isHit ? existing.hit + 1 : existing.hit,
          miss: isHit ? existing.miss : existing.miss + 1
        })
        .eq('id', existing.id)
    } else {
      // Create new metric
      await supabaseClient
        .from('cache_metrics')
        .insert({
          endpoint,
          hit: isHit ? 1 : 0,
          miss: isHit ? 0 : 1
        })
    }
  } catch (error) {
    console.error('Failed to record metrics:', error)
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  
  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }
    
    // Parse request body
    const body = await req.json()
    const { endpoint, params = {}, options = {} } = body
    
    if (!endpoint) {
      return new Response(JSON.stringify({ error: 'Endpoint is required' }), {
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }
    
    // Determine cache settings
    const bypassCache = options.bypassCache === true
    const cacheType = options.cacheType || 'dynamic'
    const ttl = options.ttl || TTL_CONFIG[cacheType] || 300
    
    // Generate cache key
    const cacheKey = createCacheKey(endpoint, params)
    
    // Check cache if not bypassing
    if (!bypassCache) {
      const cachedData = getCache(cacheKey)
      if (cachedData) {
        // Record cache hit
        await recordMetrics(endpoint, true)
        
        return new Response(JSON.stringify(cachedData), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'HIT' }
        })
      }
    }
    
    // Record cache miss
    await recordMetrics(endpoint, false)
    
    // Fetch fresh data
    const data = await fetchDataFromAPI(endpoint, params)
    
    // Cache the result if not bypassing
    if (!bypassCache) {
      await setCache(cacheKey, data, ttl)
    }
    
    // Return the response
    return new Response(JSON.stringify(data), {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json',
        'X-Cache': 'MISS',
        'X-Cache-TTL': ttl.toString()
      }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
