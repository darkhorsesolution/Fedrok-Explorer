import { NextResponse } from 'next/server';
import { blockIndexer } from '@/lib/indexer';

export async function GET() {
  try {
    const status = await blockIndexer.getIndexerStatus();
    return NextResponse.json(status);
  } catch (error) {
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { action } = await request.json();
    
    if (action === 'start') {
      await blockIndexer.start();
      return NextResponse.json({ message: 'Indexer started' });
    } else if (action === 'stop') {
      await blockIndexer.stop();
      return NextResponse.json({ message: 'Indexer stopped' });
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}