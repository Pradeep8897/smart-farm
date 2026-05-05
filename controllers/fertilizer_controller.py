from flask import jsonify, request
from app.services.fertilizer_service import recommend_fertilizer

def get_recommendation():
    data = request.json or {}
    crop = data.get('crop', 'Wheat')
    soil_type = data.get('soil_type', 'Loamy')
    
    result = recommend_fertilizer(crop, soil_type)
    return jsonify(result)
