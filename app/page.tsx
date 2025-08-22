import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-primary-200 py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">F</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-700">Fedrok Explorer</h1>
              <p className="text-sm text-primary-600">Green Layer 1 EVM Blockchain</p>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/blocks" className="text-primary-700 hover:text-primary-500 font-medium">
              Blocks
            </Link>
            <Link href="/transactions" className="text-primary-700 hover:text-primary-500 font-medium">
              Transactions
            </Link>
            <Link href="/addresses" className="text-primary-700 hover:text-primary-500 font-medium">
              Addresses
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-green">
                <span className="text-white text-3xl font-bold">F</span>
              </div>
              <h1 className="text-5xl font-bold text-primary-700 mb-4">
                Welcome to Fedrok Explorer
              </h1>
              <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto">
                Explore the world's first green blockchain. Track transactions, monitor blocks, 
                and discover the sustainable future of decentralized technology.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center mb-16">
              <Link
                href="/blocks"
                className="btn-primary hover:bg-primary-600 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore Blocks
              </Link>
              <Link
                href="/transactions"
                className="bg-white text-primary-700 border-2 border-primary-300 hover:border-primary-500 hover:bg-primary-50 transition-colors px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                View Transactions
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="metric-card">
                <div className="metric-value">50,234</div>
                <div className="metric-label">Total Blocks</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">1,234,567</div>
                <div className="metric-label">Transactions</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">98.5%</div>
                <div className="metric-label">Green Mining</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">45.2 tons</div>
                <div className="metric-label">CO₂ Offset</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary-700 mb-12">
              Explore Fedrok Blockchain
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-green p-8 text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">Block Explorer</h3>
                <p className="text-primary-600">Explore blocks, view transactions, and track the blockchain in real-time.</p>
              </div>

              <div className="card-green p-8 text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">Green Mining</h3>
                <p className="text-primary-600">Track sustainable mining activities and carbon-neutral blockchain operations.</p>
              </div>

              <div className="card-green p-8 text-center">
                <div className="w-16 h-16 bg-mining-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">Analytics</h3>
                <p className="text-primary-600">Comprehensive blockchain analytics and environmental impact metrics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-700 mb-8">
              Search the Blockchain
            </h2>
            <div className="flex gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by block number, transaction hash, or address..."
                className="flex-1 px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-8">
                Search
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
