from app.models.marketplace_model import MarketplaceProduct, EquipmentRental
from app.models.user_model import User

def get_marketplace_items():
    products = MarketplaceProduct.query.all()
    equipment = EquipmentRental.query.filter_by(available=True).all()
    
    products_data = []
    for p in products:
        seller = User.query.get(p.seller_id)
        products_data.append({
            "id": p.id, 
            "title": p.title, 
            "description": p.description,
            "price": p.price,
            "seller": seller.username if seller else "Unknown"
        })
        
    equipment_data = []
    for e in equipment:
        owner = User.query.get(e.owner_id)
        equipment_data.append({
            "id": e.id, 
            "name": e.equipment_name, 
            "rate": e.rate_per_day,
            "owner": owner.username if owner else "Unknown"
        })
        
    return {
        "products": products_data,
        "equipment": equipment_data
    }
