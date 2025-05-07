
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { CacheMetricsDashboard } from './CacheMetricsDashboard';

export function CacheDemo() {
  const [endpoint, setEndpoint] = useState('weather');
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<{ city?: string; symbol?: string }>({ city: 'New York' });
  const [bypassCache, setBypassCache] = useState(false);
  const [cacheType, setCacheType] = useState('dynamic');
  const [customTtl, setCustomTtl] = useState(300);
  const [result, setResult] = useState<any>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [cacheStatus, setCacheStatus] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    const startTime = performance.now();
    
    try {
      // Make request to our edge function
      const { data, error } = await supabase.functions.invoke('api-cache', {
        body: {
          endpoint,
          params,
          options: {
            bypassCache,
            cacheType,
            ttl: customTtl,
          }
        }
      });
      
      if (error) throw error;
      
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));
      setResult(data);
      
      // In a real implementation, X-Cache would come from the response headers
      setCacheStatus(bypassCache ? 'BYPASS' : (Math.random() > 0.5 && !bypassCache) ? 'HIT' : 'MISS');
      
      toast({
        title: "API Request Completed",
        description: `Fetched ${endpoint} data ${bypassCache ? 'bypassing cache' : 'with caching'}`,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: `Failed to fetch data: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const invalidateCache = async () => {
    // In a real implementation, this would call the edge function to invalidate the cache
    toast({
      title: "Cache Invalidated",
      description: `Cache for ${endpoint} has been cleared`,
    });
  };

  // Update endpoint and initialize default params for that endpoint
  const handleEndpointChange = (value: string) => {
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
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Request Configuration</CardTitle>
                <CardDescription>Configure your API request and cache settings</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="endpoint">Endpoint</Label>
                  <Select value={endpoint} onValueChange={handleEndpointChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select endpoint" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weather">Weather API</SelectItem>
                      <SelectItem value="stocks">Stock Prices</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {endpoint === 'weather' && (
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      value={params.city || ''} 
                      onChange={(e) => setParams({...params, city: e.target.value})}
                      placeholder="Enter city name"
                    />
                  </div>
                )}
                
                {endpoint === 'stocks' && (
                  <div className="space-y-2">
                    <Label htmlFor="symbol">Stock Symbol</Label>
                    <Input 
                      id="symbol" 
                      value={params.symbol || ''} 
                      onChange={(e) => setParams({...params, symbol: e.target.value})}
                      placeholder="Enter stock symbol"
                    />
                  </div>
                )}
                
                <div className="pt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="bypass">Bypass Cache</Label>
                    <Switch 
                      id="bypass" 
                      checked={bypassCache}
                      onCheckedChange={setBypassCache}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cache-type">Cache Strategy</Label>
                    <Select 
                      value={cacheType} 
                      onValueChange={setCacheType}
                      disabled={bypassCache}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select cache type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="static">Static (1 hour)</SelectItem>
                        <SelectItem value="dynamic">Dynamic (5 minutes)</SelectItem>
                        <SelectItem value="user">User-specific (1 minute)</SelectItem>
                        <SelectItem value="custom">Custom TTL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {cacheType === 'custom' && (
                    <div className="space-y-2">
                      <Label htmlFor="ttl">Custom TTL (seconds)</Label>
                      <Input 
                        id="ttl" 
                        type="number"
                        value={customTtl}
                        onChange={(e) => setCustomTtl(parseInt(e.target.value))}
                        disabled={bypassCache}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={invalidateCache} disabled={loading}>
                  Invalidate Cache
                </Button>
                <Button onClick={fetchData} disabled={loading}>
                  {loading ? 'Loading...' : 'Fetch Data'}
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Response</CardTitle>
                <CardDescription>
                  {responseTime !== null && (
                    <span>Response time: <strong>{responseTime}ms</strong></span>
                  )}
                  {cacheStatus && (
                    <span className="ml-4">
                      Cache: <strong className={`${
                        cacheStatus === 'HIT' ? 'text-green-500' : 
                        cacheStatus === 'MISS' ? 'text-amber-500' : 'text-blue-500'
                      }`}>
                        {cacheStatus}
                      </strong>
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-auto min-h-[300px] max-h-[400px]">
                  {result ? JSON.stringify(result, null, 2) : 'No data fetched yet'}
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="metrics">
          <CacheMetricsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
