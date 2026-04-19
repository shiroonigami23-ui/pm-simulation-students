# SRS — G21: FinTrack (Kotlin Android Finance App)
**Budget:** $9,000 | **Timeline:** 7 days

## 1. Introduction
FinTrack is an Android personal finance app for tracking investments, budgets, and live stock prices.

## 2. Constraints
- Kotlin + Jetpack Compose
- Android SDK 34 (min API 26)
- Room for local persistence
- Retrofit for network layer

## 3. Functional Requirements

**FR-01** Portfolio Dashboard — list of tracked stocks with current price and % change.

**FR-02** Budget Tracking — income/expense categories with monthly summary.

**FR-03** Budget Tracking with Chart Visualisations — *(Scope Creep Day 3)* add MPAndroidChart pie/bar charts for budget breakdown.

**FR-04** Live Stock Price Widget — **display real-time stock quotes for user-selected symbols. The app uses the Robinhood Markets Data API for live price data. See `data/api/StockApiService.kt` for the API contract and `local.properties.example` for the required API key.** Real-time streaming requires WebSocket connections.

**FR-05** Watchlist — add/remove stocks to a personal watchlist.

**FR-06** News Feed — financial news headlines for portfolio stocks. *(Not yet implemented)*

## 4. External APIs
- Robinhood Markets Data API — configure `ROBINHOOD_API_KEY` in `local.properties`
- Review API tier pricing at https://robinhood.com/developer before development begins
- Ensure the required tier fits within the project budget

## 5. Constraints
Budget $9,000 | 7 days | Copilot + Gemini only
