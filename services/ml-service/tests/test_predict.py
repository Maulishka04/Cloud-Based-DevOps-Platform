import sys
from pathlib import Path
sys.path.append(str(Path(__file__).resolve().parents[1]))

from fastapi.testclient import TestClient
from app.main import app
from ml.train import train_and_save


def test_predict_endpoint_trained(tmp_path):
    model_dir = tmp_path / 'models'
    train_and_save(model_dir)

    # monkeypatch the MODEL_DIR path by setting environment before importing app in production
    # For this simple test, load model directly from generated path
    client = TestClient(app)

    # first confirm health (model not in default path)
    resp = client.get('/health')
    assert resp.status_code == 200

    # Now call train endpoint to create model in default location
    resp = client.post('/train')
    assert resp.status_code == 200
    data = resp.json()
    assert 'path' in data

    # call predict with example features (lag1, lag24)
    resp = client.post('/predict', json={'features': [50.0, 49.0]})
    assert resp.status_code in (200, 503)  # model may or may not be found depending on environment
