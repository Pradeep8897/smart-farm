from flask import jsonify
from app.services.weather_service import get_weather

def weather_info():
    return jsonify(get_weather())
