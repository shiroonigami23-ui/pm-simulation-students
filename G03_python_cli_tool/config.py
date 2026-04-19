# DataHarvest — source configuration
# Edit this file to add or modify data sources

DATA_SOURCES = {
    "news": {
        "url": "https://www.moneycontrol.com/news/business/",
        "parser": "html.parser",
        "item_selector": "li.clearfix",
        "title_tag": "h2",
        "link_attr": "href",
        "enabled": True,
        "description": "Business news headlines"
    },
    "markets": {
        "url": "https://economictimes.indiatimes.com/markets/stocks/news",
        "parser": "lxml",
        "item_selector": "div.eachStory",
        "title_tag": "h3",
        "link_attr": "href",
        "enabled": True,
        "description": "Stock market news"
    },
    "demo": {
        "url": "https://quotes.toscrape.com",
        "parser": "html.parser",
        "item_selector": "div.quote",
        "title_tag": "span.text",
        "link_attr": None,
        "enabled": True,
        "description": "Demo source — always legal (toscrape.com is made for practice)"
    }
}

DB_PATH     = "data/harvest.db"
EXPORT_DIR  = "exports/"
FETCH_DELAY = 1.5   # seconds between requests (polite crawling)
SCHEDULE_HRS = 24
USER_AGENT  = "DataHarvestBot/1.0 (academic project)"
