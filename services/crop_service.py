from ai_models.crop_recommendation.predict import predict_crop

def get_crop_recommendation(data):
    try:
        n = float(data.get('nitrogen', 0))
        p = float(data.get('phosphorus', 0))
        k = float(data.get('potassium', 0))
        ph = float(data.get('ph', 7.0))
        
        crop = predict_crop(n, p, k, ph)
        return str(crop)
    except Exception as e:
        return f"Error analyzing data: {str(e)}"
