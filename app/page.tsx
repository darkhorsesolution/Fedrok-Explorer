'use client';

import { useState } from 'react';

type Block = {
  id: string;
  height: number;
  timestamp: string;
  transactions: number;
  miner: string;
  gasUsed: string;
  gasLimit: string;
};

type Transaction = {
  hash: string;
  from: string;
  to: string;
  value: string;
  fee: string;
  timestamp: string;
};

type NetworkStats = {
  totalBlocks: string;
  totalTransactions: string;
  activeNodes: string;
  hashRate: string;
  difficulty: string;
  blockTime: string;
};

export default function FedrokExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const recentBlocks: Block[] = [
    {
      id: "0x1a2b3c4d",
      height: 1234567,
      timestamp: "2024-01-15 14:30:25",
      transactions: 42,
      miner: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
      gasUsed: "8,234,567",
      gasLimit: "15,000,000",
    },
    {
      id: "0x2b3c4d5e",
      height: 1234566,
      timestamp: "2024-01-15 14:29:12",
      transactions: 38,
      miner: "0x853e46Dd7745D0643036a4c9E4C0643036a4c9E4",
      gasUsed: "7,891,234",
      gasLimit: "15,000,000",
    },
    {
      id: "0x3c4d5e6f",
      height: 1234565,
      timestamp: "2024-01-15 14:27:58",
      transactions: 51,
      miner: "0x964f57Ee8856E0754147b5dF5C0754147b5dF5C",
      gasUsed: "9,123,456",
      gasLimit: "15,000,000",
    },
  ];

  const recentTransactions: Transaction[] = [
    {
      hash: "0xa1b2c3d4e5f6789012345678901234567890abcd",
      from: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
      to: "0x853e46Dd7745D0643036a4c9E4C0643036a4c9E4",
      value: "1.25 FDK",
      fee: "0.001 FDK",
      timestamp: "2 mins ago",
    },
    {
      hash: "0xb2c3d4e5f6789012345678901234567890abcdef",
      from: "0x964f57Ee8856E0754147b5dF5C0754147b5dF5C",
      to: "0xa75g68Ff9967F0865258c6eG6D0865258c6eG6D",
      value: "0.75 FDK",
      fee: "0.0008 FDK",
      timestamp: "3 mins ago",
    },
    {
      hash: "0xc3d4e5f6789012345678901234567890abcdef01",
      from: "0xb86h79Gg0a78G0976369d7fH7E0976369d7fH7E",
      to: "0xc97i80Hh1b89H1a87470e8gI8F1a87470e8gI8F",
      value: "2.50 FDK",
      fee: "0.0012 FDK",
      timestamp: "5 mins ago",
    },
  ];

  const networkStats: NetworkStats = {
    totalBlocks: "1,234,567",
    totalTransactions: "45,678,901",
    activeNodes: "2,847",
    hashRate: "1.2 TH/s",
    difficulty: "8.5T",
    blockTime: "12.3s",
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery} (type: ${searchType})`);
  };

  const selectBlock = (block: Block) => {
    setSelectedBlock(block);
    setSelectedTransaction(null);
  };

  const selectTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setSelectedBlock(null);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatStatLabel = (key: string) => {
    return key.replace(/([A-Z])/g, " $1").trim();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-800 pt-20 pb-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-white font-display text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Fedrok Blockchain Explorer
          </h1>
          <p className="text-white/90 text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Explore blocks, transactions, and network activity on the sustainable Fedrok blockchain
          </p>
          
          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <select 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="bg-white border-2 border-primary-600 rounded-lg px-4 py-3 text-primary-800 font-medium min-w-32 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <option value="all">All</option>
                <option value="block">Block</option>
                <option value="transaction">Transaction</option>
                <option value="address">Address</option>
              </select>
              <input 
                type="text"
                placeholder="Search by block number, transaction hash, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white border-2 border-primary-600 rounded-lg px-4 py-3 text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button 
                onClick={handleSearch}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Network Statistics */}
      <div className="bg-primary-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-primary-800 font-display text-4xl text-center mb-12 font-bold">
            Network Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(networkStats).map(([key, value]) => (
              <div 
                key={key}
                className="bg-white rounded-xl p-6 text-center border-2 border-primary-600 transition-transform duration-300 hover:-translate-y-2 shadow-green"
              >
                <div className="text-primary-600 font-display text-2xl font-bold mb-2">
                  {value}
                </div>
                <div className="text-primary-800 text-sm capitalize">
                  {formatStatLabel(key)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Blocks and Transactions */}
      <div className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Recent Blocks */}
          <div>
            <h3 className="text-primary-800 font-display text-3xl mb-8 font-bold">
              Recent Blocks
            </h3>
            <div className="space-y-4">
              {recentBlocks.map((block) => (
                <div 
                  key={block.id}
                  onClick={() => selectBlock(block)}
                  className="bg-primary-50 rounded-xl p-6 border-2 border-primary-600 cursor-pointer transition-all duration-300 hover:bg-primary-600 hover:text-white hover:translate-x-2"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-display text-lg font-semibold">
                      Block #{block.height}
                    </div>
                    <div className="text-sm opacity-80">
                      {block.timestamp}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Transactions: {block.transactions}</div>
                    <div>Gas Used: {block.gasUsed}</div>
                    <div className="col-span-2">Miner: {formatAddress(block.miner)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <h3 className="text-primary-800 font-display text-3xl mb-8 font-bold">
              Recent Transactions
            </h3>
            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div 
                  key={tx.hash}
                  onClick={() => selectTransaction(tx)}
                  className="bg-primary-50 rounded-xl p-6 border-2 border-primary-600 cursor-pointer transition-all duration-300 hover:bg-primary-600 hover:text-white hover:translate-x-2"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-display text-sm font-semibold">
                      {formatAddress(tx.hash)}
                    </div>
                    <div className="text-sm opacity-80">
                      {tx.timestamp}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Value: {tx.value}</div>
                    <div>Fee: {tx.fee}</div>
                    <div>From: {formatAddress(tx.from)}</div>
                    <div>To: {formatAddress(tx.to)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Modal */}
        {(selectedBlock || selectedTransaction) && (
          <div className="max-w-6xl mx-auto mt-16 bg-primary-50 rounded-2xl p-8 border-2 border-primary-600">
            {selectedBlock && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-primary-800 font-display text-3xl font-bold">
                    Block #{selectedBlock.height} Details
                  </h3>
                  <button 
                    onClick={() => setSelectedBlock(null)}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-primary-800">Block Hash:</strong>
                    <div className="break-all">{selectedBlock.id}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Height:</strong>
                    <div>{selectedBlock.height}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Timestamp:</strong>
                    <div>{selectedBlock.timestamp}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Transactions:</strong>
                    <div>{selectedBlock.transactions}</div>
                  </div>
                  <div className="md:col-span-2">
                    <strong className="text-primary-800">Miner:</strong>
                    <div className="break-all">{selectedBlock.miner}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Gas Used:</strong>
                    <div>{selectedBlock.gasUsed}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Gas Limit:</strong>
                    <div>{selectedBlock.gasLimit}</div>
                  </div>
                </div>
              </div>
            )}

            {selectedTransaction && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-primary-800 font-display text-3xl font-bold">
                    Transaction Details
                  </h3>
                  <button 
                    onClick={() => setSelectedTransaction(null)}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="md:col-span-2">
                    <strong className="text-primary-800">Transaction Hash:</strong>
                    <div className="break-all">{selectedTransaction.hash}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">From:</strong>
                    <div className="break-all">{selectedTransaction.from}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">To:</strong>
                    <div className="break-all">{selectedTransaction.to}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Value:</strong>
                    <div>{selectedTransaction.value}</div>
                  </div>
                  <div>
                    <strong className="text-primary-800">Fee:</strong>
                    <div>{selectedTransaction.fee}</div>
                  </div>
                  <div className="md:col-span-2">
                    <strong className="text-primary-800">Timestamp:</strong>
                    <div>{selectedTransaction.timestamp}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
