package com.g21.fintrack.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.g21.fintrack.domain.StockRepository
import kotlinx.coroutines.launch

data class StockItem(val symbol: String, val price: String, val change: String, val up: Boolean)

@Composable
fun DashboardScreen() {
    val scope   = rememberCoroutineScope()
    val repo    = remember { StockRepository() }
    var stocks  by remember { mutableStateOf(listOf<StockItem>()) }
    var loading by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        scope.launch {
            val symbols = listOf("AAPL","GOOGL","MSFT","AMZN","TSLA")
            repo.getBatchQuotes(symbols).onSuccess { quotes ->
                stocks = quotes.map { q ->
                    val cur  = q.lastTradePrice.toDoubleOrNull() ?: 0.0
                    val prev = q.previousClose.toDoubleOrNull()  ?: 0.0
                    val pct  = if (prev != 0.0) ((cur - prev) / prev * 100) else 0.0
                    StockItem(q.symbol, "$${"%.2f".format(cur)}", "${"%.2f".format(pct)}%", pct >= 0)
                }
            }.onFailure {
                // API key missing or quota exceeded — show placeholder
                stocks = symbols.map { sym -> StockItem(sym, "--", "--", true) }
            }
            loading = false
        }
    }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Text("Portfolio", fontSize = 24.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(bottom = 16.dp))
        if (loading) { CircularProgressIndicator() }
        else {
            LazyColumn {
                items(stocks) { stock ->
                    Card(modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
                        Row(modifier = Modifier.padding(16.dp).fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                            Text(stock.symbol, fontWeight = FontWeight.Bold)
                            Text(stock.price)
                            Text(stock.change, color = if (stock.up) Color(0xFF10B981) else Color(0xFFEF4444))
                        }
                    }
                }
            }
        }
    }
}
