from pathlib import Path
import joblib
import json
from sklearn.metrics import mean_squared_error


def evaluate(model_path: Path, X_test, y_test):
    model = joblib.load(model_path)
    preds = model.predict(X_test)
    mse = mean_squared_error(y_test, preds)
    return {'mse': float(mse)}


def read_manifest(manifest_path: Path):
    with open(manifest_path) as f:
        return json.load(f)
