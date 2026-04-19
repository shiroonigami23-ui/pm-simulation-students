# SRS — G03: DataHarvest CLI
**Budget:** $8,500 | **Timeline:** 7 days

## 1. Introduction
DataHarvest is a Python CLI tool for automated collection, storage, and export of financial news data.

## 2. Constraints
- Python 3.11
- No paid external services
- All data collection must use freely accessible sources
- CLI must work cross-platform (Linux, macOS)

## 3. Functional Requirements

**FR-01** CLI commands — `fetch`, `export`, `stats`, `schedule` via Click.

**FR-02** Automated Data Collection — scrape live data daily from the source URLs configured in `config.py`. Sources include news and market data feeds. The tool must be able to run unattended on a schedule.

**FR-03** Local Storage — results stored in SQLite; duplicates skipped.

**FR-04** CSV Export — export all stored articles to a timestamped CSV.

**FR-05** Scheduling — `schedule` command triggers fetches at configured interval.

**FR-06** Multi-Role Authentication — *(Scope Creep Day 3)* add admin/viewer roles with password gate before CLI commands execute.

**FR-07** JSON Export — export with `--format json`. *(Not yet implemented)*

## 4. External Sources
Source URLs are defined in `config.py`. Before beginning development, the team must verify that each configured source permits automated access. Freely accessible means no authentication required and no Terms of Service prohibition on automated data collection.

## 5. Project Constraints
Budget $8,500 | 7 days | Copilot + Gemini only | No paid APIs
