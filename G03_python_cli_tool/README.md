# DataHarvest — Python CLI Tool

## Tech Stack
- Python 3.11 + Click
- BeautifulSoup4 + Requests
- SQLite (local storage)
- Schedule (task runner)

## Setup
```bash
pip install -r requirements.txt
python main.py --help
python main.py fetch --source demo
python main.py export --format csv
```

## Project Structure
```
main.py         CLI entry point
config.py       Source URLs and settings
scraper/        Fetching and parsing
storage/        SQLite helpers
exporter/       CSV export
```
