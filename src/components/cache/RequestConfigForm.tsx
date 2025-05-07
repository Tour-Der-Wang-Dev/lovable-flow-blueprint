
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ApiEndpoint, ApiParams, CacheType } from '@/lib/api-service';

interface RequestConfigFormProps {
  endpoint: ApiEndpoint;
  onEndpointChange: (value: ApiEndpoint) => void;
  params: ApiParams;
  onParamsChange: (params: ApiParams) => void;
  bypassCache: boolean;
  onBypassCacheChange: (value: boolean) => void;
  cacheType: CacheType;
  onCacheTypeChange: (value: CacheType) => void;
  customTtl: number;
  onCustomTtlChange: (value: number) => void;
  onFetchData: () => void;
  onInvalidateCache: () => void;
  loading: boolean;
}

export function RequestConfigForm({
  endpoint,
  onEndpointChange,
  params,
  onParamsChange,
  bypassCache,
  onBypassCacheChange,
  cacheType,
  onCacheTypeChange,
  customTtl,
  onCustomTtlChange,
  onFetchData,
  onInvalidateCache,
  loading,
}: RequestConfigFormProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Request Configuration</CardTitle>
        <CardDescription>Configure your API request and cache settings</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="endpoint">Endpoint</Label>
          <Select value={endpoint} onValueChange={(value) => onEndpointChange(value as ApiEndpoint)}>
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
              onChange={(e) => onParamsChange({...params, city: e.target.value})}
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
              onChange={(e) => onParamsChange({...params, symbol: e.target.value})}
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
              onCheckedChange={onBypassCacheChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cache-type">Cache Strategy</Label>
            <Select 
              value={cacheType} 
              onValueChange={(value) => onCacheTypeChange(value as CacheType)}
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
                onChange={(e) => onCustomTtlChange(parseInt(e.target.value))}
                disabled={bypassCache}
              />
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onInvalidateCache} disabled={loading}>
          Invalidate Cache
        </Button>
        <Button onClick={onFetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </Button>
      </CardFooter>
    </Card>
  );
}
