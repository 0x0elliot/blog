#!/bin/bash
set -e

cd "$(dirname "$0")/../hugo-blog"

echo "==> Cleaning old build..."
rm -rf public

echo "==> Building Hugo site..."
hugo --minify

echo "==> Deploying to Cloudflare Pages..."
npx wrangler pages deploy public --project-name=shipfast-blog --commit-dirty=true

echo "==> Done! Site deployed to https://www.shipfast.blog"
