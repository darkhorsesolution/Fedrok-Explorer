import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const start = Date.now();
    const result = await prisma.$queryRaw`SELECT NOW(), version()` as any[];
    const queryTime = Date.now() - start;
    
    return NextResponse.json({ 
      status: 'healthy',
      database: {
        connected: true,
        queryTime: `${queryTime}ms`,
        timestamp: result[0].now,
        version: result[0].version
      }
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}