
import React, { useState, useEffect } from 'react';
import { cacheService } from '@/lib/cache-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CacheMetric {
  endpoint: string;
  hit: number;
  miss: number;
}

export function CacheMetricsDashboard() {
  const [metrics, setMetrics] = useState<CacheMetric[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const data = await cacheService.getMetrics();
      setMetrics(data);
      toast({
        title: "Metrics refreshed",
        description: `Loaded metrics for ${data.length} endpoints`,
      });
    } catch (error) {
      console.error('Error fetching cache metrics:', error);
      toast({
        title: "Error loading metrics",
        description: "Failed to load cache metrics",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const chartData = metrics.map(metric => ({
    name: metric.endpoint.split('/').pop(),
    Hits: metric.hit,
    Misses: metric.miss,
    'Hit Ratio': metric.hit / (metric.hit + metric.miss || 1),
  }));

  return (
    <Card className="w-full max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle>Cache Performance Metrics</CardTitle>
        <CardDescription>Monitor cache hit rates and performance across endpoints</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <p>Loading metrics...</p>
          </div>
        ) : metrics.length === 0 ? (
          <div className="h-80 flex items-center justify-center">
            <p>No cache metrics available yet. Start making API calls to generate metrics.</p>
          </div>
        ) : (
          <>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Hits" fill="#4ade80" />
                  <Bar dataKey="Misses" fill="#f87171" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <Separator className="my-4" />
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Detailed Metrics by Endpoint</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="bg-muted/50">
                    <CardHeader className="py-2">
                      <CardTitle className="text-sm font-medium">{metric.endpoint}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Hits: <span className="font-semibold text-green-500">{metric.hit}</span></div>
                        <div>Misses: <span className="font-semibold text-red-500">{metric.miss}</span></div>
                        <div>Total: <span className="font-semibold">{metric.hit + metric.miss}</span></div>
                        <div>Hit Ratio: <span className="font-semibold">{
                          ((metric.hit / (metric.hit + metric.miss || 1)) * 100).toFixed(1)
                        }%</span></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={fetchMetrics} 
          disabled={loading}
          variant="outline"
        >
          Refresh Metrics
        </Button>
      </CardFooter>
    </Card>
  );
}
