#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python ml/train.py
uvicorn app.main:app --reload --port 8000
