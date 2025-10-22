import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import joblib
import os

# Synthetic time-series-like data for resource usage forecasting
def generate_data(n=1000):
    import numpy as np
    t = np.arange(n)
    usage = 50 + 10 * np.sin(2 * 3.1415 * t / 24) + 0.1 * t + np.random.randn(n)
    df = pd.DataFrame({"t": t, "usage": usage})
    df['lag1'] = df['usage'].shift(1).fillna(method='bfill')
    df['lag24'] = df['usage'].shift(24).fillna(method='bfill')
    return df

if __name__ == '__main__':
    df = generate_data()
    X = df[['lag1', 'lag24']]
    y = df['usage']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=50)
    model.fit(X_train, y_train)
    preds = model.predict(X_test)
    mse = mean_squared_error(y_test, preds)
    print('MSE:', mse)

    os.makedirs('models', exist_ok=True)
    version = 1
    path = f'models/model_v{version}.joblib'
    joblib.dump(model, path)
    print('Saved model to', path)
