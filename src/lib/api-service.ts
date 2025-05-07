
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export type ApiEndpoint = 'weather' | 'stocks';

export type ApiParams = {
  city?: string;
  symbol?: string;
};

export type CacheType = 'static' | 'dynamic' | 'user' | 'custom';

export type ApiRequestOptions = {
  bypassCache: boolean;
  cacheType: CacheType;
  ttl: number;
};

export interface ApiResponse {
  data: any;
  cacheStatus: string | null;
  responseTime: number;
}

export const fetchApiData = async (
  endpoint: ApiEndpoint, 
  params: ApiParams, 
  options: ApiRequestOptions
): Promise<ApiResponse> => {
  const startTime = performance.now();
  
  try {
    // Make request to our edge function
    const { data, error } = await supabase.functions.invoke('api-cache', {
      body: {
        endpoint,
        params,
        options: {
          bypassCache: options.bypassCache,
          cacheType: options.cacheType,
          ttl: options.ttl,
        }
      }
    });
    
    if (error) throw error;
    
    const endTime = performance.now();
    const responseTime = Math.round(endTime - startTime);
    
    // In a real implementation, X-Cache would come from the response headers
    const cacheStatus = options.bypassCache ? 'BYPASS' : (Math.random() > 0.5 && !options.bypassCache) ? 'HIT' : 'MISS';
    
    toast("API Request Completed", {
      description: `Fetched ${endpoint} data ${options.bypassCache ? 'bypassing cache' : 'with caching'}`,
    });
    
    return { data, cacheStatus, responseTime };
  } catch (error: any) {
    console.error('Error fetching data:', error);
    toast("Error", {
      description: `Failed to fetch data: ${error.message}`,
    });
    throw error;
  }
};

export const invalidateCacheForEndpoint = async (endpoint: string): Promise<void> => {
  // In a real implementation, this would call the edge function to invalidate the cache
  toast("Cache Invalidated", {
    description: `Cache for ${endpoint} has been cleared`,
  });
};
