'use client';

import { useState } from 'react';
import { MinimizeButton, LayoutWrapper } from '@/components';

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
    <LayoutWrapper>
      <div className="min-h-screen">


      {/* Blockchain Explorer Hero Section */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "40px 20px",
        color: "#fff",
        backgroundColor: "#004a25",
        backgroundImage: 'url("https://fedrok.com/images/audit-top.svg"), url("https://fedrok.com/images/audit-left.svg"), url("https://fedrok.com/images/audit-right.svg")',
        backgroundBlendMode: "overlay",
        backgroundPosition: "top center, 40px bottom, right 40px bottom",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundSize: "90% auto, auto 200px, auto 200px"
      }} className="sm:py-20 md:py-24 lg:py-32 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto text-center w-full" style={{ maxWidth: "1400px" }}>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 lg:mb-8" style={{
            animation: "0.3s ease 0.3s 1 normal forwards running fadeInAnimation",
            color: "rgb(255, 255, 255)",
            fontFamily: "var(--font-unbounded), sans-serif",
            lineHeight: "1.1"
          }}>
            Fedrok Blockchain Explorer
          </div>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 px-4" style={{
            color: "rgb(255, 255, 255)",
            fontFamily: "var(--font-unbounded), sans-serif",
            lineHeight: "1.4"
          }}>
            Explore blocks, transactions, and network activity on the sustainable Fedrok blockchain
          </div>

          {/* Search Section */}
          <div className="rounded-2xl p-2 sm:p-3 md:p-4 border-2 shadow-2xl backdrop-blur-sm mx-auto" 
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              borderColor: "rgba(255, 255, 255, 0.3)", 
              maxWidth: "1200px", 
              width: "100%",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            }}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch">
              <input 
                type="text"
                placeholder="Search by block number, transaction hash, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm transition-all duration-300"
                style={{ 
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.3)", 
                  color: "rgb(0, 74, 37)",
                  fontFamily: "var(--font-unbounded), sans-serif"
                }}
              />
              <button 
                onClick={handleSearch}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm whitespace-nowrap"
                style={{ 
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                  color: "rgb(0, 74, 37)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  fontFamily: "var(--font-unbounded), sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Network Statistics */}
      <div style={{ backgroundColor: "rgb(251, 241, 229)", padding: "64px 40px" }}>
        <div className="max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 font-bold" style={{ 
            color: "rgb(0, 74, 37)",
            fontFamily: "var(--font-unbounded), sans-serif"
          }}>
            Network Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(networkStats).map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl p-6 text-center border-2 transition-transform duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderColor: "rgb(5, 96, 50)"
                }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2" style={{ 
                  color: "rgb(5, 96, 50)",
                  fontFamily: "var(--font-unbounded), sans-serif"
                }}>
                  {value}
                </div>
                <div className="text-xs sm:text-sm capitalize" style={{ 
                  color: "rgb(0, 74, 37)",
                  fontFamily: "var(--font-unbounded), sans-serif"
                }}>
                  {formatStatLabel(key)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Blocks and Transactions */}
      <div style={{ backgroundColor: "rgb(255, 255, 255)", padding: "32px 20px" }} className="sm:p-12 md:p-16 lg:p-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Recent Blocks */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 font-bold" style={{
              color: "rgb(0, 74, 37)",
              fontFamily: "var(--font-unbounded), sans-serif"
            }}>
              Recent Blocks
            </h3>
            <div className="space-y-4">
              {recentBlocks.map((block) => (
                <div
                  key={block.id}
                  onClick={() => selectBlock(block)}
                  className="rounded-xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300 hover:translate-x-2"
                  style={{
                    backgroundColor: "rgb(251, 241, 229)",
                    borderColor: "rgb(5, 96, 50)",
                    color: "rgb(0, 74, 37)",
                    fontFamily: "var(--font-unbounded), sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(5, 96, 50)";
                    e.currentTarget.style.color = "rgb(255, 255, 255)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(251, 241, 229)";
                    e.currentTarget.style.color = "rgb(0, 74, 37)";
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm sm:text-base md:text-lg font-semibold" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
                      Block #{block.height}
                    </div>
                    <div className="text-xs sm:text-sm opacity-80" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
                      {block.timestamp}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
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
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 font-bold" style={{
              color: "rgb(0, 74, 37)",
              fontFamily: "var(--font-unbounded), sans-serif"
            }}>
              Recent Transactions
            </h3>
            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.hash}
                  onClick={() => selectTransaction(tx)}
                  className="rounded-xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300 hover:translate-x-2"
                  style={{
                    backgroundColor: "rgb(251, 241, 229)",
                    borderColor: "rgb(5, 96, 50)",
                    color: "rgb(0, 74, 37)",
                    fontFamily: "var(--font-unbounded), sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(5, 96, 50)";
                    e.currentTarget.style.color = "rgb(255, 255, 255)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(251, 241, 229)";
                    e.currentTarget.style.color = "rgb(0, 74, 37)";
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-semibold" style={{ fontFamily: "Unbounded, sans-serif" }}>
                      {formatAddress(tx.hash)}
                    </div>
                    <div className="text-xs sm:text-sm opacity-80" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
                      {tx.timestamp}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
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
          <div className="max-w-6xl mx-auto mt-16 rounded-2xl p-8 border-2" style={{
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "rgb(5, 96, 50)"
          }}>
            {selectedBlock && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-3xl font-bold" style={{ color: "rgb(0, 74, 37)" }}>
                    Block #{selectedBlock.height} Details
                  </h3>
                  <button
                    onClick={() => setSelectedBlock(null)}
                    className="text-white px-4 py-2 rounded-lg transition-colors"
                    style={{ backgroundColor: "rgb(5, 96, 50)" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgb(0, 74, 37)"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgb(5, 96, 50)"}
                  >
                    Close
                  </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm" style={{ color: "rgb(0, 74, 37)" }}>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Block Hash:</strong>
                    <div className="break-all">{selectedBlock.id}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Height:</strong>
                    <div>{selectedBlock.height}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Timestamp:</strong>
                    <div>{selectedBlock.timestamp}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Transactions:</strong>
                    <div>{selectedBlock.transactions}</div>
                  </div>
                  <div className="md:col-span-2">
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Miner:</strong>
                    <div className="break-all">{selectedBlock.miner}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Gas Used:</strong>
                    <div>{selectedBlock.gasUsed}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Gas Limit:</strong>
                    <div>{selectedBlock.gasLimit}</div>
                  </div>
                </div>
              </div>
            )}

            {selectedTransaction && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-3xl font-bold" style={{ color: "rgb(0, 74, 37)" }}>
                    Transaction Details
                  </h3>
                  <button
                    onClick={() => setSelectedTransaction(null)}
                    className="text-white px-4 py-2 rounded-lg transition-colors"
                    style={{ backgroundColor: "rgb(5, 96, 50)" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgb(0, 74, 37)"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgb(5, 96, 50)"}
                  >
                    Close
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm" style={{ color: "rgb(0, 74, 37)" }}>
                  <div className="md:col-span-2">
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Transaction Hash:</strong>
                    <div className="break-all">{selectedTransaction.hash}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>From:</strong>
                    <div className="break-all">{selectedTransaction.from}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>To:</strong>
                    <div className="break-all">{selectedTransaction.to}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Value:</strong>
                    <div>{selectedTransaction.value}</div>
                  </div>
                  <div>
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Fee:</strong>
                    <div>{selectedTransaction.fee}</div>
                  </div>
                  <div className="md:col-span-2">
                    <strong style={{ color: "rgb(5, 96, 50)" }}>Timestamp:</strong>
                    <div>{selectedTransaction.timestamp}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Minimize Button */}
      <MinimizeButton onClick={() => console.log('Minimize clicked')} />
      </div>
    </LayoutWrapper>
  );
}
