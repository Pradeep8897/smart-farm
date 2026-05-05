import sqlite3

db_path = 'database/smart_farming.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

try:
    cursor.execute("ALTER TABLE users ADD COLUMN password_hash VARCHAR(256)")
    print("Added password_hash column to users table.")
except sqlite3.OperationalError as e:
    print(f"Column might already exist: {e}")

hash_val = 'scrypt:32768:8:1$V047iwCK6GCmx8Gp$340dfc0a04e7c0e05f42f48e417cb48e6561dafc3e11cc51f546fc6f256e8d9c82c3c94b7b49591388283885bb3c788df6eae418a26e793de27957fa5302a3aa'

cursor.execute("UPDATE users SET password_hash = ? WHERE email = 'farmer@example.com'", (hash_val,))
conn.commit()
conn.close()
print("Successfully updated the password hash!")
