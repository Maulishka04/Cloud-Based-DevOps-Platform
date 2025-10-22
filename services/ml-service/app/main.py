from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import joblib
from pathlib import Path
from ml.train import train_and_save

app = FastAPI(title="ml-service")

MODEL_DIR = Path(os.environ.get("MODEL_DIR", "./models"))
MODEL_DIR.mkdir(parents=True, exist_ok=True)
MODEL_PATH = MODEL_DIR / "model_v1.pkl"


class TrainResponse(BaseModel):
    status: str
    path: str


class PredictRequest(BaseModel):
    features: list[float]


@app.get("/health")
def health():
    return {"status": "ok", "model_exists": MODEL_PATH.exists()}


@app.post("/train", response_model=TrainResponse)
def train():
    # Trains a model using internal synthetic data and saves artifact
    path = train_and_save(MODEL_DIR)
    return TrainResponse(status="trained", path=str(path))


@app.post("/predict")
def predict(req: PredictRequest):
    if not MODEL_PATH.exists():
        raise HTTPException(status_code=503, detail="Model not trained")
    model = joblib.load(MODEL_PATH)
    X = [req.features]
    pred = model.predict(X)
    return {"prediction": float(pred[0])}
