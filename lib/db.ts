import { Pool, PoolClient } from 'pg';

// Connection pool optimized for high-frequency block indexing (0.8s blocks)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Performance settings for fast block times
  max: 20,          // Max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  // Critical for 0.8s block times - keep connections alive
  keepAlive: true,
  keepAliveInitialDelayMillis: 0,
});

// Handle pool errors
pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

export default pool;

// Helper for transactions (we'll need this for block+txs atomicity)
export const withTransaction = async <T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T> => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};