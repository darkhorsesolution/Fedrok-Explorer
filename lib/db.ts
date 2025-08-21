import { prisma } from '@/lib/prisma';

export const pool = {
  query: async (text: string, params?: any[]) => {
    throw new Error('Use prisma client directly instead of raw queries');
  }
};

// Helper for transactions using Prisma
export const withTransaction = async <T>(
  callback: (tx: any) => Promise<T>
): Promise<T> => {
  return await prisma.$transaction(async (tx) => {
    return await callback(tx);
  });
};

export default pool;