import sqlite3

db_path = 'database/smart_farming.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

try:
    cursor.execute("ALTER TABLE alerts RENAME TO system_alerts")
    print("Renamed alerts table to system_alerts.")
except sqlite3.OperationalError as e:
    print(f"Table might already be renamed or missing: {e}")
    # Let's create it manually if it doesn't exist
    try:
        cursor.execute('''CREATE TABLE system_alerts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type VARCHAR(50) NOT NULL,
            message TEXT NOT NULL,
            active BOOLEAN DEFAULT 1
        )''')
        print("Created system_alerts table.")
    except Exception as create_e:
        print(f"Error creating table: {create_e}")

conn.commit()
conn.close()
print("Successfully fixed system_alerts table!")
