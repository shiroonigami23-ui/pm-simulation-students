package com.g21.fintrack.domain

import com.g21.fintrack.data.api.ApiConfig
import com.g21.fintrack.data.api.StockQuoteResponse
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class StockRepository {
    private val api    = ApiConfig.createStockService()
    private val apiKey = "Bearer ${ApiConfig.buildApiKey()}"

    suspend fun getQuote(symbol: String): Result<StockQuoteResponse> = withContext(Dispatchers.IO) {
        runCatching { api.getQuote(symbol, apiKey) }
    }

    suspend fun getBatchQuotes(symbols: List<String>): Result<List<StockQuoteResponse>> =
        withContext(Dispatchers.IO) {
            runCatching { api.getBatchQuotes(symbols.joinToString(","), apiKey).results }
        }
}
