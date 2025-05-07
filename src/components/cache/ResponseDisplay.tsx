
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ResponseDisplayProps {
  result: any;
  responseTime: number | null;
  cacheStatus: string | null;
}

export function ResponseDisplay({ result, responseTime, cacheStatus }: ResponseDisplayProps) {
  return (
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
  );
}
