#!/bin/bash
set -e

cd "$(dirname "$0")/../cf-worker"

echo "==> Deploying Cloudflare Worker..."
npx wrangler deploy

echo "==> Done! Worker deployed to https://blog-cta-api.aditya-1bf.workers.dev"
