# FinTrack — Kotlin Android Finance App

## Tech Stack
- Kotlin + Jetpack Compose
- Retrofit + Gson (network)
- Room (local DB)
- MPAndroidChart

## Setup
1. Open in Android Studio
2. Create `local.properties` from `local.properties.example`
3. Set your stock API key in `local.properties`
4. Build and run (API 26+)

> Review API plan pricing for the stock data provider before integration. See `data/api/StockApiService.kt` and `local.properties.example`.

## Project Structure
```
app/src/main/java/com/g21/fintrack/
  ui/screens/     Compose screens
  data/api/       Retrofit API service
  data/local/     Room database
  domain/         Repository layer
```
