from app.models.database import db
from datetime import datetime

class MarketPrice(db.Model):
    __tablename__ = 'market_prices'
    id = db.Column(db.Integer, primary_key=True)
    crop_name = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Float, nullable=False)
    date = db.Column(db.Date, default=datetime.utcnow)

class Alert(db.Model):
    __tablename__ = 'alerts'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    crop_name = db.Column(db.String(80), nullable=False)
    threshold_price = db.Column(db.Float, nullable=False)
