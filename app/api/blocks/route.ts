import { NextResponse } from 'next/server';
import { blockIndexer } from '@/lib/indexer';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    
    const blocks = await blockIndexer.getLatestBlocks(limit);
    
    return NextResponse.json({ 
      blocks,
      count: blocks.length 
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}