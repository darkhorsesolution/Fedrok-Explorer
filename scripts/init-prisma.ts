import { config } from 'dotenv';
import { prisma } from '@/lib/prisma';

// Load environment variables
config();

async function initializePrisma() {
  try {
    console.log('Initializing Prisma database...');

    // Test database connection
    await prisma.$connect();
    console.log('Database connection successful');

    // Initialize indexer state if not exists
    const existingState = await prisma.indexerState.findFirst();
    
    if (!existingState) {
      await prisma.indexerState.create({
        data: {
          id: 1,
          lastIndexedBlock: 0,
          indexerVersion: '1.0.0'
        }
      });
      console.log('Indexer state initialized');
    } else {
      console.log('Indexer state already exists');
    }

    // Test inserting a sample block (will be removed in production)
    const sampleBlockExists = await prisma.block.findFirst({
      where: { number: 0 }
    });

    if (!sampleBlockExists) {
      await prisma.block.create({
        data: {
          number: 0,
          hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          timestamp: Math.floor(Date.now() / 1000),
          miner: '0x0000000000000000000000000000000000000000',
          gasUsed: '0',
          gasLimit: '30000000',
          transactionCount: 0,
          greenMiner: false
        }
      });
      console.log('Sample block created (genesis)');
    }

    console.log('Prisma initialization complete!');
    
  } catch (error) {
    console.error('Prisma initialization failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

initializePrisma();