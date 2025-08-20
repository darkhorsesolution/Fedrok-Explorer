import { NextResponse } from 'next/server';
import fedrokRPC from '@/lib/rpc';

export async function GET() {
  try {
    const start = Date.now();
    
    // Test all RPC connections
    const connections = await fedrokRPC.testConnections();
    
    // Get latest block number
    const latestBlock = await fedrokRPC.getLatestBlockNumber();
    
    // Get latest block details
    const blockDetails = await fedrokRPC.getBlock(latestBlock);
    
    const responseTime = Date.now() - start;
    
    return NextResponse.json({
      status: 'connected',
      chainId: fedrokRPC.getChainId(),
      latestBlockNumber: latestBlock,
      latestBlock: {
        number: blockDetails.number,
        hash: blockDetails.hash,
        timestamp: blockDetails.timestamp,
        miner: blockDetails.miner,
        gasUsed: blockDetails.gasUsed?.toString(),
        gasLimit: blockDetails.gasLimit?.toString(),
        transactionCount: blockDetails.transactions.length,
      },
      rpcEndpoints: connections,
      responseTime: `${responseTime}ms`,
      blockTime: blockDetails.timestamp ? new Date(blockDetails.timestamp * 1000).toISOString() : null,
    });
  } catch (error) {
    console.error('RPC connection failed:', error);
    
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown RPC error',
      chainId: fedrokRPC.getChainId(),
    }, { status: 500 });
  }
}