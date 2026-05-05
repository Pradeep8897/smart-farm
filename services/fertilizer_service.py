def recommend_fertilizer(crop_type, soil_type):
    crop_data = {
        # Grains & Cereals
        'wheat': {"fertilizer": "NPK 12:32:16 at sowing, followed by Urea (46% N) top dressing at 30 days.", "storage": "Dry to 10-12% moisture. Store in galvanized steel silos or jute bags in a dry warehouse."},
        'rice': {"fertilizer": "Urea (46% N) applied in 3 splits. Zinc Sulphate (25kg/ha) if soil is zinc deficient.", "storage": "Dry to 14% moisture. Store in hermetic bags or sealed bins to prevent pest infestation."},
        'corn': {"fertilizer": "Heavy nitrogen feeder. NPK 20:20:20 base, plus side-dress Nitrogen at knee-high stage.", "storage": "Dry to 15% moisture. Use aerated grain bins to prevent mold and mycotoxin growth."},
        'maize': {"fertilizer": "Heavy nitrogen feeder. NPK 20:20:20 base, plus side-dress Nitrogen at knee-high stage.", "storage": "Dry to 15% moisture. Use aerated grain bins to prevent mold and mycotoxin growth."},
        'barley': {"fertilizer": "NPK 10:20:20 at sowing. Avoid excess nitrogen which causes lodging.", "storage": "Dry to 12% moisture. Store in cool, dry bins."},
        'sorghum': {"fertilizer": "Moderate N requirements. NPK 15:15:15 at planting.", "storage": "Dry to 13% moisture. Highly susceptible to weevils; use fumigated bins."},
        'oats': {"fertilizer": "NPK 10:20:20 at seeding. Top-dress with Nitrogen if soil is poor.", "storage": "Dry to 12% moisture. Store in aerated bins."},
        'millet': {"fertilizer": "Low fertilizer requirement. 40kg N/ha and 20kg P/ha is sufficient.", "storage": "Dry to 10-12% moisture. Stores very well for long periods in dry conditions."},
        'bajra': {"fertilizer": "Low fertilizer requirement. 40kg N/ha and 20kg P/ha is sufficient.", "storage": "Dry to 10-12% moisture. Stores very well for long periods in dry conditions."},
        'jowar': {"fertilizer": "Moderate N requirements. NPK 15:15:15 at planting.", "storage": "Dry to 13% moisture. Highly susceptible to weevils; use fumigated bins."},
        
        # Pulses & Legumes
        'soybean': {"fertilizer": "Requires minimal Nitrogen due to fixing. Apply Phosphorus (SSP) and Sulphur at sowing.", "storage": "Dry to 11% moisture. Store in cool, dry conditions as beans are highly susceptible to moisture damage."},
        'chickpea': {"fertilizer": "Apply Phosphorus (SSP) as basal dose. Seed inoculation with Rhizobium is highly recommended.", "storage": "Dry to 10% moisture. Store in airtight containers or bins, treating with neem leaves to prevent pulse beetle."},
        'gram': {"fertilizer": "Apply Phosphorus (SSP) as basal dose. Seed inoculation with Rhizobium is highly recommended.", "storage": "Dry to 10% moisture. Store in airtight containers or bins, treating with neem leaves to prevent pulse beetle."},
        'lentil': {"fertilizer": "Low N, moderate P requirement. 20kg N and 40kg P/ha.", "storage": "Dry to 12% moisture. Store in cool, dry place."},
        'peas': {"fertilizer": "NPK 10:20:20 at planting. Excess nitrogen reduces pod set.", "storage": "Dry seeds to 12% moisture. Store in cool, dry environment."},
        'mungbean': {"fertilizer": "Starter dose of 20kg N and 40kg P/ha.", "storage": "Dry to 10-12% moisture. Susceptible to bruchids; use hermetic storage."},
        'blackgram': {"fertilizer": "Starter dose of 20kg N and 40kg P/ha.", "storage": "Dry to 10% moisture. Store in airtight bags."},
        
        # Oilseeds
        'groundnut': {"fertilizer": "Apply Gypsum (Calcium Sulphate) at pegging stage for pod development. Avoid excess Nitrogen.", "storage": "Dry pods to 8-9% moisture. Store in well-ventilated gunny bags, protected from moisture to prevent aflatoxin."},
        'peanut': {"fertilizer": "Apply Gypsum (Calcium Sulphate) at pegging stage for pod development. Avoid excess Nitrogen.", "storage": "Dry pods to 8-9% moisture. Store in well-ventilated gunny bags, protected from moisture to prevent aflatoxin."},
        'mustard': {"fertilizer": "High requirement of Sulphur for oil content. Apply NPK 12:32:16 along with Elemental Sulphur.", "storage": "Dry seeds to 8% moisture. Store in dry bins or bags away from direct sunlight."},
        'sunflower': {"fertilizer": "NPK 14:28:14. Requires Boron foliar spray at ray floret stage.", "storage": "Dry to 9% moisture. High oil content requires cool, well-ventilated storage."},
        'sesame': {"fertilizer": "NPK 40:20:20 kg/ha. Very sensitive to excess fertilizer.", "storage": "Dry to 6% moisture. Store in airtight containers in a cool place."},
        'canola': {"fertilizer": "High Sulphur requirement. Nitrogen should be applied in splits.", "storage": "Dry to 8% moisture. Monitor closely for heating in storage bins."},
        
        # Cash Crops
        'cotton': {"fertilizer": "NPK 10:26:26 base. Foliar spray of 2% DAP and 1% KCl during flowering stage.", "storage": "Store in dry, well-ventilated sheds. Keep bales elevated on wooden pallets away from moisture."},
        'sugarcane': {"fertilizer": "High N and K demand. Apply 250-300 kg N/ha in 3-4 splits. Muriate of Potash recommended.", "storage": "Must be crushed within 24 hours of harvesting. Cannot be stored long-term without severe sugar loss."},
        'jute': {"fertilizer": "Requires NPK 40:20:20. Nitrogen is crucial for vegetative fiber growth.", "storage": "Store dried fiber in well-ventilated, dry godowns. Prevent moisture to avoid rotting."},
        'tobacco': {"fertilizer": "Requires Potassium Sulphate (not Muriate) for good leaf burn quality. High Nitrogen.", "storage": "Cured leaves must be stored in specialized climate-controlled sheds to age properly."},
        
        # Plantation & Spices
        'coffee': {"fertilizer": "NPK 15:15:15 during vegetative stage, switch to high Potassium during berry development.", "storage": "Dry parchment coffee to 10-11% moisture. Store in GrainPro bags in a cool, dark warehouse."},
        'tea': {"fertilizer": "Frequent application of Nitrogen (Urea or Ammonium Sulphate) and Potassium. Foliar Zinc is beneficial.", "storage": "Must be processed immediately after plucking. Processed tea should be stored in foil-lined, airtight containers."},
        'rubber': {"fertilizer": "NPK 12:6:6 for mature trees. Magnesium is critical.", "storage": "Processed rubber sheets should be stored in cool, dark, dry rooms away from direct sunlight and heat sources."},
        'cardamom': {"fertilizer": "Organic compost enriched with NPK 75:75:150 kg/ha/year.", "storage": "Store dried capsules in moisture-proof, airtight containers to preserve essential oils."},
        'pepper': {"fertilizer": "NPK 50:50:150 grams per vine per year. Apply in splits.", "storage": "Dry black pepper to 10% moisture. Store in polythene-lined gunny bags."},
        'turmeric': {"fertilizer": "Heavy feeder. NPK 120:50:80 kg/ha along with FYM.", "storage": "Boil, dry, and polish. Store in dry pits or gunny bags in a dry, dark warehouse."},
        
        # Vegetables
        'potato': {"fertilizer": "NPK 10:26:26 is ideal. High potassium requirement for tuber bulking.", "storage": "Store at 2-4°C (35-39°F) with 90% humidity in dark, well-ventilated cold storage to prevent sprouting."},
        'tomato': {"fertilizer": "Calcium Nitrate to prevent blossom end rot, plus NPK 19:19:19 drip fertigation.", "storage": "Store at 10-15°C (50-59°F). Do NOT refrigerate below 10°C as it damages flavor and texture."},
        'onion': {"fertilizer": "Sulphur-rich fertilizer (SSP) required for pungency. Avoid excess Nitrogen late in season.", "storage": "Cure in the field for 3-5 days. Store in well-ventilated, dry sheds at 0-2°C with 65-70% humidity."},
        'garlic': {"fertilizer": "NPK 100:50:50 kg/ha plus Sulphur for flavor.", "storage": "Cure properly. Store in mesh bags in a cool, dry, well-ventilated area."},
        'cabbage': {"fertilizer": "Heavy Nitrogen feeder. NPK 120:60:60 kg/ha.", "storage": "Store at 0°C with 95-100% humidity. Can be stored for several months."},
        'carrot': {"fertilizer": "Low Nitrogen, high Potassium. Excess N causes forking.", "storage": "Store at 0°C with 98% humidity. Remove tops before storage to prevent moisture loss."},
        'spinach': {"fertilizer": "Requires high Nitrogen for leafy growth. Apply Urea in splits.", "storage": "Highly perishable. Store at 0°C with 95% humidity for up to 10-14 days."},
        'eggplant': {"fertilizer": "NPK 100:50:50 kg/ha. Apply N in splits during flowering.", "storage": "Store at 10-12°C. Sensitive to chilling injury below 10°C."},
        'brinjal': {"fertilizer": "NPK 100:50:50 kg/ha. Apply N in splits during flowering.", "storage": "Store at 10-12°C. Sensitive to chilling injury below 10°C."},
        
        # Fruits
        'apple': {"fertilizer": "Nitrogen and Potassium in early spring. Foliar Calcium sprays in summer to prevent bitter pit.", "storage": "Controlled Atmosphere (CA) storage at 0-3°C with 1-2% Oxygen to halt ripening."},
        'banana': {"fertilizer": "Extremely high Potassium requirement. NPK 200:50:400 grams per plant/year.", "storage": "Harvest green. Store at 13-14°C. NEVER refrigerate below 13°C as skin will turn black."},
        'mango': {"fertilizer": "NPK 1000:500:1000 grams per mature tree/year. Avoid N during flowering.", "storage": "Store at 12-13°C. Highly perishable. Ripen with ethylene gas if required."},
        'grape': {"fertilizer": "Requires targeted fertigation. Petiole analysis recommended for precise NPK.", "storage": "Store at -1 to 0°C with 90-95% humidity. Use SO2 pads to prevent botrytis rot."},
        'orange': {"fertilizer": "Requires micronutrients like Zinc and Iron in addition to NPK.", "storage": "Store at 3-8°C depending on variety, with 85-90% humidity."},
        'papaya': {"fertilizer": "Continuous feeder. NPK 250:250:500 grams per plant/year applied every 2 months.", "storage": "Store at 10-12°C. Highly perishable and sensitive to chilling injury."}
    }
    
    crop_lower = crop_type.lower().strip()
    
    if crop_lower in crop_data:
        return crop_data[crop_lower]
        
    # Intelligent fallback for unknown crops
    return {
        "fertilizer": f"For {crop_type}, a balanced NPK 19:19:19 water-soluble blend is a safe starting point. Conduct a soil test for precise adjustments.",
        "storage": f"Ensure {crop_type} is harvested at proper maturity, cleaned, dried to appropriate moisture levels, and stored in a well-ventilated, dry facility."
    }
