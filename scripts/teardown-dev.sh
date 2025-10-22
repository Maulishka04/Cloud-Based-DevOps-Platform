#!/usr/bin/env bash
# scripts/teardown-dev.sh - stops local docker-compose environment
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

docker-compose -f docker-compose.dev.yml down -v

echo "Local dev environment stopped and volumes removed."
