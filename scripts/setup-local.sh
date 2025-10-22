#!/usr/bin/env bash
# scripts/setup-local.sh
# Starts local dev environment using docker-compose

set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Starting local dev environment with docker-compose.dev.yml"

docker-compose -f docker-compose.dev.yml up --build -d

echo "Services started. To view logs: docker-compose -f docker-compose.dev.yml logs -f"

echo "Run 'make test' to execute unit tests for the Node.js service."
