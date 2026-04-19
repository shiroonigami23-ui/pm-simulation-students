import time
import requests
from bs4 import BeautifulSoup
from config import USER_AGENT, FETCH_DELAY

def fetch_source(cfg: dict) -> list:
    headers = {"User-Agent": USER_AGENT}
    try:
        resp = requests.get(cfg["url"], headers=headers, timeout=12)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  [net error] {e}")
        return []
    soup = BeautifulSoup(resp.text, cfg.get("parser", "html.parser"))
    items = soup.select(cfg["item_selector"])
    results = []
    for item in items[:50]:
        tag = item.find(cfg["title_tag"])
        if not tag:
            continue
        title = tag.get_text(strip=True)
        link  = ""
        if cfg.get("link_attr"):
            a = tag.find("a") or item.find("a")
            if a:
                link = a.get(cfg["link_attr"], "")
        results.append({"title": title, "url": link, "source_key": cfg.get("description","")})
    time.sleep(FETCH_DELAY)
    return results
