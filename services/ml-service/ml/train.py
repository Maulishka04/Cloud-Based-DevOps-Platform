import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import joblib
from pathlib import Path
import json


def generate_data(n=1000):
    t = np.arange(n)
    usage = 50 + 10 * np.sin(2 * np.pi * t / 24) + 0.05 * t + np.random.randn(n)
    df = pd.DataFrame({"t": t, "usage": usage})
    df['lag1'] = df['usage'].shift(1).fillna(method='bfill')
    df['lag24'] = df['usage'].shift(24).fillna(method='bfill')
    return df


def train_and_save(model_dir: Path, version: int = 1):
    df = generate_data()
    X = df[['lag1', 'lag24']]
    y = df['usage']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    pipe = Pipeline([
        ('scaler', StandardScaler()),
        ('rf', RandomForestRegressor(n_estimators=50, random_state=42))
    ])

    pipe.fit(X_train, y_train)
    preds = pipe.predict(X_test)
    mse = mean_squared_error(y_test, preds)

    model_dir.mkdir(parents=True, exist_ok=True)
    model_path = model_dir / f'model_v{version}.pkl'
    joblib.dump(pipe, model_path)

    # manifest
    manifest = {
        'version': version,
        'path': str(model_path.name),
        'mse': float(mse)
    }
    manifest_path = model_dir / 'manifest.json'
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2)

    return model_path


if __name__ == '__main__':
    print('Training model...')
    path = train_and_save(Path('./models'))
    print('Saved model to', path)
