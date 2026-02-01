#!/bin/bash
set -e

SCRIPT_DIR="$(dirname "$0")"

echo "==> Deploying Worker..."
"$SCRIPT_DIR/deploy-worker.sh"

echo ""
echo "==> Deploying Blog..."
"$SCRIPT_DIR/deploy-blog.sh"

echo ""
echo "==> All deployments complete!"
