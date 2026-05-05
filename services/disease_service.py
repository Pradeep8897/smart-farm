from ai_models.disease_detection.predict import predict_disease

def analyze_disease(image_bytes):
    # Pass the raw image bytes directly to the ML model
    result = predict_disease(image_bytes)
    return result
