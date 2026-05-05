from flask import jsonify, request
from app.services.profit_service import calculate_profit

def calc_profit():
    data = request.json or {}
    rev = float(data.get('revenue', 0))
    costs = float(data.get('costs', 0))
    return jsonify(calculate_profit(rev, costs))
