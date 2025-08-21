# Fedrok Explorer

**Official blockchain explorer for the Fedrok Network**

> A comprehensive, eco-friendly blockchain explorer showcasing green mining and carbon credit functionality with professional design matching Fedrok's brand identity.

## 🌱 Design Philosophy

Fedrok Explorer follows a **green-first design system** inspired by environmental sustainability:

- **Primary Colors**: Deep greens, forest tones, and earth colors
- **Typography**: Clean, modern, professional fonts
- **Layout**: Spacious, breathable design with emphasis on data clarity
- **Visual Elements**: Nature-inspired icons and sustainable imagery
- **Carbon Theme**: Green mining indicators, environmental impact metrics

## 🚀 Quick Start

```bash
# Clone and setup
cd Fedrok-explorer
npm install

# Setup database
npm run db:init

# Start development
npm run dev
```

## 📊 Current Features

### ✅ Completed
- **Database Foundation**: PostgreSQL with optimized schema for 0.8s blocks
- **RPC Integration**: Multi-endpoint Fedrok connection with failover
- **Health Monitoring**: Database and blockchain connectivity checks
- **Performance Optimized**: Ready for high-frequency block indexing

### 🔄 In Progress  
- Block indexer for real-time synchronization
- Homepage with latest blocks display
- Green mining visualization

### 📋 Roadmap
- Transaction details and internal calls
- Token tracking (ERC-20/721/1155)
- Validator dashboard and staking metrics
- Carbon credit lifecycle tracking
- Environmental impact analytics

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, PostgreSQL
- **Blockchain**: Ethers.js, Fedrok Testnet (Chain ID: 7110)
- **Database**: PostgreSQL 17 with performance optimizations
- **Styling**: Tailwind CSS with custom green theme

## 📡 API Endpoints

- `GET /api/health` - Database connectivity status
- `GET /api/rpc` - Blockchain connection and latest block info

## 🌍 Environment

```env
FEDROK_CHAIN_ID=7110
DATABASE_URL=postgresql://user:pass@localhost:5433/fedrok_explorer
FEDROK_RPC_PRIMARY=http://20.151.233.51:8545/
```

## 📚 Documentation

- [Setup Guide](./setup/database.md) - Database and RPC configuration
- [Architecture](./architecture/overview.md) - System design and performance
- [API Documentation](./api/endpoints.md) - API reference and examples

## 🔗 Links

- [Fedrok Website](https://fedrok.com/)
- [Fedrok Whitepaper](../whitepaper.md)
- [GitHub Repository](https://github.com/fedrok/explorer)

---

**Built with 🌱 by the Fedrok team for a sustainable blockchain future.**