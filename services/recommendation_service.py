def get_fertilizer_recommendation(crop, soil_type):
    # Dummy logic
    if soil_type.lower() == 'clay':
        return "Use Urea and DAP in 2:1 ratio."
    return "Use standard NPK 19:19:19."

def get_storage_suggestion(crop):
    return f"Store {crop} in a cool, dry place below 15°C to prevent mold."
