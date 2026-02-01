#!/bin/bash
set -e

cd "$(dirname "$0")/../cf-worker"

# Use Node 20+ for wrangler
source ~/.nvm/nvm.sh
nvm use 20 --silent

echo "==> Deploying Cloudflare Worker..."
npx wrangler deploy

echo "==> Done! Worker deployed to https://blog-cta-api.aditya-1bf.workers.dev"
