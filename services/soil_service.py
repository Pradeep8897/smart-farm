def analyze_soil(ph, nitrogen, phosphorus, potassium):
    if ph < 5.5:
        recommendation = "Soil is too acidic. Apply agricultural lime."
    elif ph > 7.5:
        recommendation = "Soil is too alkaline. Apply sulfur or organic matter."
    else:
        recommendation = "Soil pH is optimal."
        
    if nitrogen < 20:
        recommendation += " Nitrogen levels are low. Consider Urea application."
    
    return {"status": "Analysis Complete", "recommendation": recommendation}
