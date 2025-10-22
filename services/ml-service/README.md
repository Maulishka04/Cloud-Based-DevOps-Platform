# ML Service

FastAPI service with endpoints:
- GET /health
- POST /train — trains a sample model and saves to `models/model_v1.pkl`
- POST /predict — expects JSON {"features": [float,...]}

Run locally (Linux/macOS):

```bash
cd services/ml-service
bash scripts/run_local_ml.sh
```

Or use Docker:

```bash
docker build -t clouddevopshub-ml:local .
docker run -p 8000:8000 -v $(pwd)/models:/app/models clouddevopshub-ml:local
```

Run tests:

```bash
cd services/ml-service
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest -q
```

Model artifacts are saved to `models/` and a `manifest.json` is created.
# ML Service

FastAPI service for model inference and a train script to generate example model artifacts.

Local:
- python -m venv .venv
- pip install -r requirements.txt
- python train.py
- uvicorn app:app --reload --port 8000

Model artifacts are saved in `models/` as `model_v1.joblib`.
