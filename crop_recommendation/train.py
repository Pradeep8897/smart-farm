import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import pickle
import os

def generate_synthetic_data():
    np.random.seed(42)
    n_samples = 500
    
    data = []
    labels = []
    
    crops = {
        'Wheat': {'N': (80, 120), 'P': (40, 60), 'K': (40, 60), 'pH': (6.0, 7.5)},
        'Rice': {'N': (100, 150), 'P': (50, 70), 'K': (50, 70), 'pH': (5.5, 6.5)},
        'Maize': {'N': (120, 150), 'P': (60, 80), 'K': (50, 80), 'pH': (5.8, 7.0)},
        'Cotton': {'N': (100, 130), 'P': (40, 60), 'K': (40, 60), 'pH': (5.8, 8.0)}
    }
    
    for _ in range(n_samples):
        crop = np.random.choice(list(crops.keys()))
        n = np.random.uniform(*crops[crop]['N'])
        p = np.random.uniform(*crops[crop]['P'])
        k = np.random.uniform(*crops[crop]['K'])
        ph = np.random.uniform(*crops[crop]['pH'])
        
        data.append([n, p, k, ph])
        labels.append(crop)
        
    return pd.DataFrame(data, columns=['Nitrogen', 'Phosphorus', 'Potassium', 'pH']), labels

def train():
    print("Generating synthetic dataset...")
    X, y = generate_synthetic_data()
    
    print("Training Random Forest Classifier...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X.values, y)
    
    # Save model
    model_path = os.path.join(os.path.dirname(__file__), 'model.pkl')
    with open(model_path, 'wb') as f:
        pickle.dump(model, f)
        
    print(f"Model saved successfully to {model_path}!")

if __name__ == '__main__':
    train()
