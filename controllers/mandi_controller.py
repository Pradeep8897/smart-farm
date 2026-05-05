from flask import jsonify
from app.services.mandi_service import get_nearby_mandis

def locator():
    return jsonify(get_nearby_mandis())
