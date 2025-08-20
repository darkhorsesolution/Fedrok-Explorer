import { ethers, JsonRpcProvider } from 'ethers';

interface FedrokRpcConfig {
  chainId: number;
  endpoints: string[];
}

class FedrokRPC {
  private config: FedrokRpcConfig;
  private providers: JsonRpcProvider[];
  private currentProviderIndex: number = 0;

  constructor() {
    this.config = {
      chainId: parseInt(process.env.FEDROK_CHAIN_ID || '7110'),
      endpoints: [
        process.env.FEDROK_RPC_PRIMARY!,
        process.env.FEDROK_RPC_BACKUP_1!,
        process.env.FEDROK_RPC_BACKUP_2!,
      ].filter(Boolean),
    };

    // Initialize providers for all endpoints
    this.providers = this.config.endpoints.map(
      (endpoint) => new JsonRpcProvider(endpoint)
    );

    console.log(`Initialized Fedrok RPC with ${this.providers.length} endpoints`);
  }

  private async getProvider(): Promise<JsonRpcProvider> {
    const provider = this.providers[this.currentProviderIndex];
    
    try {
      // Test the current provider with a simple call
      await provider.getNetwork();
      return provider;
    } catch (error) {
      console.warn(`RPC endpoint ${this.currentProviderIndex} failed, trying next...`);
      
      // Try next provider
      this.currentProviderIndex = (this.currentProviderIndex + 1) % this.providers.length;
      
      // If we've tried all providers, throw error
      if (this.currentProviderIndex === 0) {
        throw new Error('All RPC endpoints are unavailable');
      }
      
      return this.getProvider(); // Recursive call to try next provider
    }
  }

  async getLatestBlockNumber(): Promise<number> {
    const provider = await this.getProvider();
    return await provider.getBlockNumber();
  }

  async getBlock(blockNumber: number): Promise<ethers.Block> {
    const provider = await this.getProvider();
    const block = await provider.getBlock(blockNumber, true); // Include transactions
    if (!block) {
      throw new Error(`Block ${blockNumber} not found`);
    }
    return block;
  }

  async getBlockByHash(blockHash: string): Promise<ethers.Block> {
    const provider = await this.getProvider();
    const block = await provider.getBlock(blockHash, true);
    if (!block) {
      throw new Error(`Block ${blockHash} not found`);
    }
    return block;
  }

  async getTransaction(txHash: string) {
    const provider = await this.getProvider();
    return await provider.getTransaction(txHash);
  }

  async getTransactionReceipt(txHash: string) {
    const provider = await this.getProvider();
    return await provider.getTransactionReceipt(txHash);
  }

  // Test connection to all endpoints
  async testConnections(): Promise<{ [endpoint: string]: boolean }> {
    const results: { [endpoint: string]: boolean } = {};
    
    for (let i = 0; i < this.providers.length; i++) {
      try {
        await this.providers[i].getNetwork();
        results[this.config.endpoints[i]] = true;
      } catch (error) {
        results[this.config.endpoints[i]] = false;
      }
    }
    
    return results;
  }

  getChainId(): number {
    return this.config.chainId;
  }
}

export const fedrokRPC = new FedrokRPC();
export default fedrokRPC;