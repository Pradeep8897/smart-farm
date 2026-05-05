from app.models.mandi_model import Mandi

def get_nearby_mandis():
    mandis = Mandi.query.order_by(Mandi.distance_km.asc()).all()
    return [{"id": m.id, "name": m.name, "location": m.location, "distance_km": m.distance_km} for m in mandis]
