from flask import jsonify, request
from app.services.soil_service import analyze_soil

def test_soil():
    data = request.json or {}
    ph = data.get('ph', 7.0)
    nitrogen = data.get('nitrogen', 50)
    phosphorus = data.get('phosphorus', 50)
    potassium = data.get('potassium', 50)
    
    result = analyze_soil(ph, nitrogen, phosphorus, potassium)
    return jsonify(result)
