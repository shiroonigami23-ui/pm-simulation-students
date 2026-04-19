package com.g21.fintrack.data.api

import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Path
import retrofit2.http.Query

/**
 * Robinhood Markets Data API client
 *
 * Documentation: https://robinhood.com/us/en/support/articles/api-documentation/
 *
 * API Tier Pricing (as of 2024):
 *   - Free tier:     Delayed quotes only (15-min delay), 500 requests/day
 *   - Starter:       $49/month — real-time, 5,000 requests/day
 *   - Business:      $300/month — real-time, unlimited requests, WebSocket streaming
 *
 * SRS FR-04 requires "live stock price widget" with real-time quotes.
 * Real-time data requires Starter ($49/mo) at minimum.
 * WebSocket streaming for live updates (FR-04) requires Business tier ($300/mo).
 *
 * API Key configured in local.properties as ROBINHOOD_API_KEY.
 */
interface StockApiService {

    @GET("quotes/{symbol}")
    suspend fun getQuote(
        @Path("symbol")            symbol: String,
        @Header("Authorization")   auth:   String
    ): StockQuoteResponse

    @GET("quotes")
    suspend fun getBatchQuotes(
        @Query("symbols")          symbols: String,   // comma-separated
        @Header("Authorization")   auth:    String
    ): BatchQuoteResponse

    @GET("market_data/streaming/{symbol}")
    suspend fun getStreamingQuote(
        @Path("symbol")            symbol: String,
        @Header("Authorization")   auth:   String
    ): StockQuoteResponse  // WebSocket in practice — REST stub for now
}

data class StockQuoteResponse(
    val symbol:        String,
    val lastTradePrice:String,
    val bidPrice:      String,
    val askPrice:      String,
    val volume:        String,
    val openPrice:     String,
    val highPrice:     String,
    val lowPrice:      String,
    val previousClose: String,
    val updatedAt:     String,
)

data class BatchQuoteResponse(
    val results: List<StockQuoteResponse>
)
