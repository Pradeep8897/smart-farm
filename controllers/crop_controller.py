from flask import jsonify, request
from app.services.crop_service import get_crop_recommendation

def recommend_crop():
    data = request.json
    crop = get_crop_recommendation(data)
    return jsonify({"recommended_crop": crop})
