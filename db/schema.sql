-- Fedrok Explorer Database Schema
-- Optimized for 1s block times

-- Create database if not exists
-- CREATE DATABASE fedrok_explorer;

CREATE TABLE IF NOT EXISTS blocks (
    number BIGINT PRIMARY KEY,
    hash VARCHAR(66) UNIQUE NOT NULL,
    parent_hash VARCHAR(66) NOT NULL,
    timestamp BIGINT NOT NULL,
    miner VARCHAR(42) NOT NULL,
    gas_used BIGINT NOT NULL,
    gas_limit BIGINT NOT NULL,
    base_fee_per_gas BIGINT,
    size INTEGER,
    transaction_count INTEGER DEFAULT 0,
    
    -- Fedrok specific (from whitepaper)
    green_miner BOOLEAN DEFAULT FALSE,
    round_robin_position INTEGER,
    
    -- Indexing metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    indexed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance (critical for 0.8s blocks)
CREATE INDEX idx_blocks_timestamp ON blocks(timestamp DESC);
CREATE INDEX idx_blocks_miner ON blocks(miner);
CREATE INDEX idx_blocks_created_at ON blocks(created_at DESC);
CREATE INDEX idx_blocks_green_miner ON blocks(green_miner) WHERE green_miner = TRUE;

-- Simple indexer state tracking
CREATE TABLE IF NOT EXISTS indexer_state (
    id INTEGER PRIMARY KEY DEFAULT 1,
    last_indexed_block BIGINT DEFAULT 0,
    last_indexed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    indexer_version VARCHAR(20) DEFAULT '1.0.0',
    
    -- Ensure only one row
    CONSTRAINT single_row CHECK (id = 1)
);

-- Insert initial state
INSERT INTO indexer_state (id, last_indexed_block) 
VALUES (1, 0) 
ON CONFLICT (id) DO NOTHING;