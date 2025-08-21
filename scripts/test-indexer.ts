import { config } from 'dotenv';
import { blockIndexer } from '../lib/indexer';

// Load environment variables
config({ path: '.env' });

// Debug environment variables
console.log('Environment check:');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
console.log('FEDROK_RPC_PRIMARY:', process.env.FEDROK_RPC_PRIMARY || 'Not set');
console.log('FEDROK_RPC_BACKUP_1:', process.env.FEDROK_RPC_BACKUP_1 || 'Not set');

async function testIndexer() {
  try {
    console.log('Testing Fedrok block indexer...');

    // Get initial status
    console.log('Initial status:');
    const initialStatus = await blockIndexer.getIndexerStatus();
    console.log(initialStatus);

    // Start indexer
    console.log('\nStarting indexer...');
    await blockIndexer.start();

    // Let it run for 10 seconds
    console.log('\nRunning for 10 seconds...');
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Get latest blocks
    console.log('\nLatest blocks:');
    const latestBlocks = await blockIndexer.getLatestBlocks(5);
    latestBlocks.forEach(block => {
      const miningType = block.greenMiner ? 'GREEN' : 'REGULAR';
      console.log(`Block ${block.number}: ${block.hash.slice(0, 10)}... ${miningType}`);
    });

    // Get green mining stats
    console.log('\nGreen mining stats:');
    const stats = await blockIndexer.getGreenMiningStats();
    console.log(stats);

    // Get final status
    console.log('\nFinal status:');
    const finalStatus = await blockIndexer.getIndexerStatus();
    console.log(finalStatus);

    // Stop indexer
    console.log('\nStopping indexer...');
    await blockIndexer.stop();

    console.log('Test completed successfully!');

  } catch (error) {
    console.error('Test failed:', error);
  }
}

testIndexer();