from flask import jsonify, request
from app.services.recommendation_service import get_fertilizer_recommendation, get_storage_suggestion

def recommend():
    data = request.json or {}
    crop = data.get('crop', 'Unknown')
    soil = data.get('soil_type', 'Unknown')
    
    return jsonify({
        "fertilizer": get_fertilizer_recommendation(crop, soil),
        "storage": get_storage_suggestion(crop)
    })
