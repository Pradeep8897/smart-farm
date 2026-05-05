DELETE FROM users;
INSERT INTO users (id, username, email, password_hash) VALUES (1, 'farmer1', 'farmer@example.com', 'scrypt:32768:8:1$xsjQLqqjJAoHIEml$b8555a08c48ff28241ba98b91403b6dc37d50cffea1115211b345fa317870a618707c7cb44af3b832647b3aba75b7a3bd0d7c7ece5ea5ddb6883984a6e17eb76');
INSERT INTO users (id, username, email, password_hash) VALUES (2, 'agri_corp', 'contact@agricorp.com', 'scrypt:32768:8:1$xsjQLqqjJAoHIEml$b8555a08c48ff28241ba98b91403b6dc37d50cffea1115211b345fa317870a618707c7cb44af3b832647b3aba75b7a3bd0d7c7ece5ea5ddb6883984a6e17eb76');

INSERT OR IGNORE INTO crops (id, name, season, soil_type) VALUES (1, 'Wheat', 'Winter', 'Loamy');
INSERT OR IGNORE INTO crops (id, name, season, soil_type) VALUES (2, 'Rice', 'Kharif', 'Clay');

DELETE FROM market_prices;
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 110.5, date('now', '-9 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 112.0, date('now', '-8 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 115.5, date('now', '-7 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 109.0, date('now', '-6 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 118.5, date('now', '-5 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 120.0, date('now', '-4 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 121.5, date('now', '-3 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 125.0, date('now', '-2 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 130.5, date('now', '-1 days'));
INSERT INTO market_prices (crop_name, price, date) VALUES ('Wheat', 135.0, date('now'));

DELETE FROM marketplace_products;
INSERT INTO marketplace_products (seller_id, title, description, price) VALUES (1, 'Organic Wheat 100kg', 'Fresh harvest', 1200.0);
INSERT INTO marketplace_products (seller_id, title, description, price) VALUES (2, 'Premium Fertilizer', 'High nitrogen blend', 450.0);

DELETE FROM equipment_rentals;
INSERT INTO equipment_rentals (owner_id, equipment_name, rate_per_day, available) VALUES (2, 'John Deere Tractor', 5000.0, 1);
INSERT INTO equipment_rentals (owner_id, equipment_name, rate_per_day, available) VALUES (1, 'Water Pump 5HP', 500.0, 1);

DELETE FROM mandis;
INSERT INTO mandis (name, location, distance_km) VALUES ('Azadpur APMC Mandi', 'New Delhi', 15.2);
INSERT INTO mandis (name, location, distance_km) VALUES ('Lasalgaon APMC (Onion)', 'Maharashtra', 24.5);
INSERT INTO mandis (name, location, distance_km) VALUES ('Ghazipur Wholesale Market', 'Delhi', 8.4);
INSERT INTO mandis (name, location, distance_km) VALUES ('Yeshwantpur APMC Yard', 'Bengaluru', 32.0);
INSERT INTO mandis (name, location, distance_km) VALUES ('Unjha Spice Mandi', 'Gujarat', 45.1);
