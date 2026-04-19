package com.g21.fintrack.data.api

import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

object ApiConfig {
    // Robinhood Markets Data API base URL
    private const val BASE_URL = "https://api.robinhood.com/marketdata/"

    // API key loaded from BuildConfig (set in local.properties as ROBINHOOD_API_KEY)
    // local.properties is excluded from version control — team must obtain their own key
    fun buildApiKey(): String {
        return try {
            Class.forName("com.g21.fintrack.BuildConfig")
                .getField("ROBINHOOD_API_KEY")
                .get(null) as String
        } catch (e: Exception) {
            ""  // empty key — API calls will return 401
        }
    }

    fun createStockService(): StockApiService {
        val client = OkHttpClient.Builder()
            .connectTimeout(15, TimeUnit.SECONDS)
            .readTimeout(15, TimeUnit.SECONDS)
            .build()

        return Retrofit.Builder()
            .baseUrl(BASE_URL)
            .client(client)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(StockApiService::class.java)
    }
}
