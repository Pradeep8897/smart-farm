from app.models.market_model import MarketPrice

def get_trends():
    # Query database for real seeded data
    prices = MarketPrice.query.filter_by(crop_name='Wheat').order_by(MarketPrice.date.asc()).all()
    
    if not prices:
        return {"dates": [], "prices": [], "crop": "Wheat"}
        
    dates = [p.date.strftime('%Y-%m-%d') if hasattr(p.date, 'strftime') else str(p.date) for p in prices]
    values = [p.price for p in prices]
    
    return {"dates": dates, "prices": values, "crop": "Wheat"}

import os
import csv
import random
from datetime import datetime, timedelta

def get_daily_trends(crop_name):
    # Try reading from CSV
    dataset_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'ai_models', 'datasets', 'market_prices.csv')
    
    dates = []
    prices = []
    
    if os.path.exists(dataset_path):
        with open(dataset_path, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row['crop_name'].lower() == crop_name.lower():
                    dates.append(row['date'])
                    prices.append(float(row['price']))
    
    if len(prices) == 0:
        # Generate mock data rule
        dates = [(datetime.now() - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(13, -1, -1)]
        
        lower_bound, upper_bound = 100, 200 # Default
        crop_lower = crop_name.lower()
        if 'rice' in crop_lower: lower_bound, upper_bound = 1200, 1500
        elif 'wheat' in crop_lower: lower_bound, upper_bound = 1000, 1300
        elif 'maize' in crop_lower: lower_bound, upper_bound = 800, 1100
        elif 'tomato' in crop_lower or 'onion' in crop_lower or 'potato' in crop_lower: lower_bound, upper_bound = 20, 80
            
        prices = [round(random.uniform(lower_bound, upper_bound), 2) for _ in dates]
    
    highest = max(prices)
    lowest = min(prices)
    average = round(sum(prices) / len(prices), 2)
    
    return {
        "crop": crop_name,
        "dates": dates,
        "prices": prices,
        "highest": highest,
        "lowest": lowest,
        "average": average
    }

def get_location_trends(crop_name, location):
    dataset_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'ai_models', 'datasets', 'market_prices.csv')
    
    dates = []
    prices = []
    
    # Optional real parsing if location exists in CSV
    if os.path.exists(dataset_path):
        with open(dataset_path, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row['crop_name'].lower() == crop_name.lower() and row.get('location', '').lower() == location.lower():
                    dates.append(row['date'])
                    prices.append(float(row['price']))
    
    if len(prices) == 0:
        dates = [(datetime.now() - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(13, -1, -1)]
        
        # Base bounds
        lower_bound, upper_bound = 100, 200
        crop_lower = crop_name.lower()
        if 'rice' in crop_lower: lower_bound, upper_bound = 1200, 1500
        elif 'wheat' in crop_lower: lower_bound, upper_bound = 1000, 1300
        elif 'maize' in crop_lower: lower_bound, upper_bound = 800, 1100
        elif 'tomato' in crop_lower or 'onion' in crop_lower or 'potato' in crop_lower: lower_bound, upper_bound = 20, 80
            
        # Location modifier
        loc_lower = location.lower()
        modifier = 1.0
        if loc_lower in ['chennai', 'delhi', 'mumbai', 'bangalore', 'hyderabad']:
            modifier = 1.15 # Urban centers 15% higher
        elif loc_lower in ['village', 'rural']:
            modifier = 0.85 # Rural 15% lower
            
        lower_bound = int(lower_bound * modifier)
        upper_bound = int(upper_bound * modifier)
        
        prices = [round(random.uniform(lower_bound, upper_bound), 2) for _ in dates]
    
    highest = max(prices)
    lowest = min(prices)
    average = round(sum(prices) / len(prices), 2)
    
    return {
        "crop": crop_name,
        "location": location,
        "dates": dates,
        "prices": prices,
        "highest": highest,
        "lowest": lowest,
        "average": average
    }
