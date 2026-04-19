import sqlite3, os
from config import DB_PATH

def init_db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    with sqlite3.connect(DB_PATH) as c:
        c.execute("""CREATE TABLE IF NOT EXISTS articles(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            url TEXT,
            source TEXT,
            fetched_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )""")

def save_articles(articles, source_key):
    saved = 0
    with sqlite3.connect(DB_PATH) as c:
        for a in articles:
            exists = c.execute("SELECT 1 FROM articles WHERE title=? AND source=?",
                               (a["title"], source_key)).fetchone()
            if not exists:
                c.execute("INSERT INTO articles(title,url,source) VALUES(?,?,?)",
                          (a["title"],a["url"],source_key))
                saved += 1
    return saved

def get_articles(source_filter=None):
    with sqlite3.connect(DB_PATH) as c:
        c.row_factory = sqlite3.Row
        if source_filter:
            rows = c.execute("SELECT * FROM articles WHERE source=? ORDER BY fetched_at DESC",
                             (source_filter,)).fetchall()
        else:
            rows = c.execute("SELECT * FROM articles ORDER BY fetched_at DESC").fetchall()
    return [dict(r) for r in rows]
