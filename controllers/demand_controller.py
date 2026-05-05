from flask import jsonify, request
from app.services.demand_service import predict_demand

def get_demand():
    data = request.json or {}
    crop = data.get('crop', 'Wheat')
    return jsonify(predict_demand(crop))
