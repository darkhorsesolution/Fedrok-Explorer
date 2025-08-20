import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const start = Date.now();
    const result = await pool.query('SELECT NOW(), version()');
    const queryTime = Date.now() - start;
    
    return NextResponse.json({ 
      status: 'healthy',
      database: {
        connected: true,
        queryTime: `${queryTime}ms`,
        timestamp: result.rows[0].now,
        version: result.rows[0].version
      }
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}