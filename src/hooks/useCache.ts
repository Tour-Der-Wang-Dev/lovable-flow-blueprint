
import { useState, useEffect } from 'react';
import { cacheService } from '@/lib/cache-service';

interface UseCacheOptions {
  ttl?: number;
  bypassCache?: boolean;
  strategy?: 'time-based' | 'lru';
}

export function useCache<T>(
  endpoint: string, 
  params?: Record<string, any>,
  options?: UseCacheOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Check if we should bypass cache
        if (!options?.bypassCache) {
          // Try to get from cache first
          const cachedData = await cacheService.get<T>(endpoint, params);
          
          if (cachedData) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }
        
        // Cache miss or bypass, fetch from API
        // In a real app, this would be replaced with your actual API call
        const response = await fetch(`/api/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const freshData = await response.json();
        
        // Store in cache if not bypassing
        if (!options?.bypassCache) {
          await cacheService.set(endpoint, freshData, params, {
            ttl: options?.ttl,
            strategy: options?.strategy,
          });
        }
        
        setData(freshData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Cache hook error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [endpoint, JSON.stringify(params), options?.bypassCache]);

  const invalidateCache = async () => {
    return await cacheService.invalidate(endpoint, params);
  };

  return { data, loading, error, invalidateCache };
}
