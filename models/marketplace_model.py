from app.models.database import db

class MarketplaceProduct(db.Model):
    __tablename__ = 'marketplace_products'
    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)

class EquipmentRental(db.Model):
    __tablename__ = 'equipment_rentals'
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    equipment_name = db.Column(db.String(120), nullable=False)
    rate_per_day = db.Column(db.Float, nullable=False)
    available = db.Column(db.Boolean, default=True)
