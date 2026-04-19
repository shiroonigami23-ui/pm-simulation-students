import csv, os
from datetime import datetime
from storage.db import get_articles
from config import EXPORT_DIR

def export_csv(source_filter=None) -> str:
    os.makedirs(EXPORT_DIR, exist_ok=True)
    rows = get_articles(source_filter)
    ts   = datetime.now().strftime('%Y%m%d_%H%M%S')
    path = f"{EXPORT_DIR}export_{ts}.csv"
    with open(path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id','title','url','source','fetched_at'])
        writer.writeheader()
        writer.writerows(rows)
    return path
