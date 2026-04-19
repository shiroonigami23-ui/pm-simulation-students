import click
from scraper.fetcher import fetch_source
from storage.db import init_db, save_articles, get_articles
from exporter.csv_export import export_csv
from config import DATA_SOURCES

@click.group()
def cli():
    """DataHarvest — automated data collection CLI"""
    init_db()

@cli.command()
@click.option('--source', default='demo', show_default=True, help='Source key from config.py')
def fetch(source):
    """Fetch articles from a configured data source"""
    if source not in DATA_SOURCES:
        click.echo(f"[error] Unknown source '{source}'. Available: {', '.join(DATA_SOURCES)}")
        return
    cfg = DATA_SOURCES[source]
    if not cfg.get('enabled'):
        click.echo(f"[skip] Source '{source}' is disabled in config.")
        return
    click.echo(f"[fetch] {source} <- {cfg['url']}")
    articles = fetch_source(cfg)
    saved = save_articles(articles, source)
    click.echo(f"[done] {saved} new records saved (fetched {len(articles)} total).")

@cli.command()
@click.option('--format', 'fmt', default='csv', type=click.Choice(['csv','json']), show_default=True)
@click.option('--source', default=None, help='Filter by source key')
def export(fmt, source):
    """Export stored data to file"""
    if fmt == 'csv':
        path = export_csv(source_filter=source)
        click.echo(f"[export] CSV written to: {path}")
    else:
        click.echo("[todo] JSON export not yet implemented.")

@cli.command()
def stats():
    """Show storage statistics"""
    rows = get_articles()
    from collections import Counter
    counts = Counter(r['source'] for r in rows)
    click.echo(f"Total records: {len(rows)}")
    for src, cnt in counts.most_common():
        click.echo(f"  {src}: {cnt}")

if __name__ == '__main__':
    cli()
