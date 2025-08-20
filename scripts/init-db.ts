import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';

async function initializeDatabase() {
  console.log('🚀 Initializing Fedrok Explorer database...');
  console.log('📋 Database URL:', process.env.DATABASE_URL?.replace(/:[^:]*@/, ':****@'));
  
  // First connect to postgres database to create fedrok_explorer if it doesn't exist
  const dbUrl = new URL(process.env.DATABASE_URL!);
  const dbName = dbUrl.pathname.slice(1); // Remove leading '/'
  dbUrl.pathname = '/postgres'; // Connect to default postgres database first
  
  const adminPool = new Pool({
    connectionString: dbUrl.toString(),
  });
  
  try {
    // Check if database exists and create if not
    console.log('🔍 Checking if database exists...');
    const dbExists = await adminPool.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbName]
    );
    
    if (dbExists.rows.length === 0) {
      console.log(`🏗️ Creating database '${dbName}'...`);
      await adminPool.query(`CREATE DATABASE "${dbName}"`);
      console.log('✅ Database created successfully');
    } else {
      console.log('✅ Database already exists');
    }
    
  } catch (error) {
    console.error('❌ Database creation failed:', error);
    process.exit(1);
  } finally {
    await adminPool.end();
  }
  
  // Now connect to the actual database to create schema
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
  try {
    // Test connection
    console.log('🔌 Testing database connection...');
    await pool.query('SELECT NOW()');
    console.log('✅ Database connection successful');
    
    // Read schema file
    const schemaPath = path.join(process.cwd(), 'db', 'schema.sql');
    console.log('📄 Reading schema from:', schemaPath);
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute schema
    console.log('🛠️ Creating database schema...');
    await pool.query(schema);
    
    console.log('✅ Database schema created successfully');
    
    // Check current state
    const result = await pool.query('SELECT * FROM indexer_state');
    console.log('📊 Indexer state:', result.rows[0]);
    
  } catch (error) {
    console.error('❌ Database schema creation failed:');
    console.error(error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

initializeDatabase();