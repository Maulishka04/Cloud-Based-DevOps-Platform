from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import os

class PredictRequest(BaseModel):
    values: list[float]

app = FastAPI(title="ml-service")

MODEL_PATH = os.environ.get("MODEL_PATH", "/models/model_v1.joblib")
model = None

@app.on_event("startup")
def load_model():
    global model
    if os.path.exists(MODEL_PATH):
        model = joblib.load(MODEL_PATH)
    else:
        model = None

@app.get("/health")
def health():
    return {"status": "ok", "model_loaded": model is not None}

@app.post("/predict")
def predict(req: PredictRequest):
    if model is None:
        return {"error": "model not loaded"}
    arr = [req.values]
    pred = model.predict(arr)
    return {"prediction": pred[0].item()}
