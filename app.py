from flask import Flask, jsonify
from flask_cors import CORS
from app.config import Config
from app.models.database import db

import os

def create_app(config_class=Config):
    # Set static_folder to the frontend directory
    frontend_dir = os.path.join(os.path.abspath(os.path.dirname(os.path.dirname(__file__))), 'frontend')
    app = Flask(__name__, static_folder=frontend_dir, static_url_path='/')
    app.config.from_object(config_class)
    
    CORS(app)
    db.init_app(app)
    
    with app.app_context():
        from app.models import user_model, crop_model, market_model, soil_model, marketplace_model, mandi_model
        db.create_all()
        
    # Serve React App
    @app.route('/')
    @app.route('/<path:path>')
    def serve(path=''):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return app.send_static_file(path)
        else:
            return app.send_static_file('public/index.html')
            
    # Health check
    @app.route('/api/health')
    def health():
        return jsonify({"status": "ok", "message": "Smart Farming API is running"})
        
    from app.routes.crop_routes import crop_bp
    from app.routes.market_routes import market_bp
    from app.routes.disease_routes import disease_bp
    from app.routes.weather_routes import weather_bp
    from app.routes.user_routes import user_bp
    from app.routes.mandi_routes import mandi_bp
    from app.routes.marketplace_routes import marketplace_bp
    from app.routes.recommendation_routes import recommend_bp
    from app.routes.profit_routes import profit_bp
    from app.routes.demand_routes import demand_bp
    from app.routes.assistant_routes import assistant_bp
    from app.routes.alert_routes import alert_bp
    from app.routes.soil_routes import soil_bp
    from app.routes.fertilizer_routes import fertilizer_bp
    
    app.register_blueprint(crop_bp, url_prefix='/api/crop')
    app.register_blueprint(market_bp, url_prefix='/api/market')
    app.register_blueprint(disease_bp, url_prefix='/api/disease')
    app.register_blueprint(weather_bp, url_prefix='/api/weather')
    app.register_blueprint(user_bp, url_prefix='/api/user')
    app.register_blueprint(mandi_bp, url_prefix='/api/mandi')
    app.register_blueprint(marketplace_bp, url_prefix='/api/marketplace')
    app.register_blueprint(recommend_bp, url_prefix='/api/recommend')
    app.register_blueprint(profit_bp, url_prefix='/api/profit')
    app.register_blueprint(demand_bp, url_prefix='/api/demand')
    app.register_blueprint(assistant_bp, url_prefix='/api/assistant')
    app.register_blueprint(alert_bp, url_prefix='/api/alerts')
    app.register_blueprint(soil_bp, url_prefix='/api/soil')
    app.register_blueprint(fertilizer_bp, url_prefix='/api/fertilizer')
        
    return app
