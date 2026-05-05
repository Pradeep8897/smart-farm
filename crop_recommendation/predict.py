import pickle
import os
import numpy as np

# Load model once when module is imported
model_path = os.path.join(os.path.dirname(__file__), 'model.pkl')
model = None

if os.path.exists(model_path) and os.path.getsize(model_path) > 0:
    with open(model_path, 'rb') as f:
        try:
            model = pickle.load(f)
        except Exception:
            model = None

def predict_crop(n, p, k, ph):
    if model is None:
        return "Model not trained yet."
    
    input_data = np.array([[n, p, k, ph]])
    prediction = model.predict(input_data)
    return prediction[0]
