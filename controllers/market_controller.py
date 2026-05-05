from flask import jsonify, request
from app.services.market_service import get_trends, get_daily_trends, get_location_trends

def trends():
    return jsonify(get_trends())

def daily_trends():
    crop = request.args.get('crop', 'Rice')
    return jsonify(get_daily_trends(crop))

def location_trends():
    crop = request.args.get('crop', 'Rice')
    location = request.args.get('location', 'Global')
    return jsonify(get_location_trends(crop, location))
