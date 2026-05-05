from flask import Blueprint
from app.controllers.disease_controller import detect_disease

disease_bp = Blueprint('disease', __name__)
disease_bp.route('/detect', methods=['POST'])(detect_disease)
