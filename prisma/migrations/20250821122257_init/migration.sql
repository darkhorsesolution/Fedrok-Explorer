-- CreateTable
CREATE TABLE "public"."blocks" (
    "number" BIGINT NOT NULL,
    "hash" VARCHAR(66) NOT NULL,
    "parent_hash" VARCHAR(66) NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "miner" VARCHAR(42) NOT NULL,
    "gas_used" TEXT NOT NULL,
    "gas_limit" TEXT NOT NULL,
    "base_fee_per_gas" TEXT,
    "size" INTEGER,
    "transaction_count" INTEGER NOT NULL,
    "green_miner" BOOLEAN NOT NULL DEFAULT false,
    "round_robin_position" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "indexed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "public"."indexer_state" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "last_indexed_block" BIGINT NOT NULL DEFAULT 0,
    "last_indexed_at" TIMESTAMP(3),
    "indexer_version" TEXT NOT NULL DEFAULT '1.0.0',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "indexer_state_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blocks_hash_key" ON "public"."blocks"("hash");

-- CreateIndex
CREATE INDEX "blocks_timestamp_idx" ON "public"."blocks"("timestamp");

-- CreateIndex
CREATE INDEX "blocks_miner_idx" ON "public"."blocks"("miner");

-- CreateIndex
CREATE INDEX "blocks_green_miner_idx" ON "public"."blocks"("green_miner");

-- CreateIndex
CREATE INDEX "blocks_created_at_idx" ON "public"."blocks"("created_at");
