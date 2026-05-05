import sqlite3
import os

def init_db():
    db_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'database', 'smart_farming.db')
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    print("Creating tables...")
    with open(os.path.join(os.path.dirname(__file__), 'schema.sql'), 'r') as f:
        cursor.executescript(f.read())
        
    print("Seeding data...")
    with open(os.path.join(os.path.dirname(__file__), 'seed_data.sql'), 'r') as f:
        cursor.executescript(f.read())
        
    conn.commit()
    conn.close()
    print("Database seeded successfully!")

if __name__ == '__main__':
    init_db()
