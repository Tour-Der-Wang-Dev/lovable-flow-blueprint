
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CacheMetricsDashboard } from './CacheMetricsDashboard';
import { RequestConfigForm } from './cache/RequestConfigForm';
import { ResponseDisplay } from './cache/ResponseDisplay';
import { ApiEndpoint, ApiParams, CacheType, fetchApiData, invalidateCacheForEndpoint } from '@/lib/api-service';

export function CacheDemo() {
  const [endpoint, setEndpoint] = useState<ApiEndpoint>('weather');
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<ApiParams>({ city: 'New York' });
  const [bypassCache, setBypassCache] = useState(false);
  const [cacheType, setCacheType] = useState<CacheType>('dynamic');
  const [customTtl, setCustomTtl] = useState(300);
  const [result, setResult] = useState<any>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [cacheStatus, setCacheStatus] = useState<string | null>(null);

  const handleFetchData = async () => {
    setLoading(true);
    
    try {
      const response = await fetchApiData(
        endpoint, 
        params, 
        {
          bypassCache,
          cacheType,
          ttl: customTtl
        }
      );
      
      setResult(response.data);
      setResponseTime(response.responseTime);
      setCacheStatus(response.cacheStatus);
    } catch (error) {
      // Error is already handled in fetchApiData
    } finally {
      setLoading(false);
    }
  };

  const handleInvalidateCache = async () => {
    await invalidateCacheForEndpoint(endpoint);
  };

  // Update endpoint and initialize default params for that endpoint
  const handleEndpointChange = (value: ApiEndpoint) => {
    setEndpoint(value);
    if (value === 'weather') {
      setParams({ city: 'New York' });
    } else if (value === 'stocks') {
      setParams({ symbol: 'AAPL' });
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">API Caching System Demo</h1>
      
      <Tabs defaultValue="demo">
        <TabsList className="mb-4">
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="demo">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RequestConfigForm 
              endpoint={endpoint}
              onEndpointChange={handleEndpointChange}
              params={params}
              onParamsChange={setParams}
              bypassCache={bypassCache}
              onBypassCacheChange={setBypassCache}
              cacheType={cacheType}
              onCacheTypeChange={setCacheType}
              customTtl={customTtl}
              onCustomTtlChange={setCustomTtl}
              onFetchData={handleFetchData}
              onInvalidateCache={handleInvalidateCache}
              loading={loading}
            />
            
            <ResponseDisplay 
              result={result}
              responseTime={responseTime}
              cacheStatus={cacheStatus}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="metrics">
          <CacheMetricsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
