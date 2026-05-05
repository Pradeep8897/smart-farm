from flask import jsonify
from app.services.marketplace_service import get_marketplace_items

def get_all():
    return jsonify(get_marketplace_items())
