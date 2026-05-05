from app.models.database import db

class Mandi(db.Model):
    __tablename__ = 'mandis'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    distance_km = db.Column(db.Float, nullable=False)
