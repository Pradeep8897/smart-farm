from flask import Blueprint
from app.controllers.weather_controller import weather_info

weather_bp = Blueprint('weather', __name__)
weather_bp.route('/', methods=['GET'])(weather_info)
