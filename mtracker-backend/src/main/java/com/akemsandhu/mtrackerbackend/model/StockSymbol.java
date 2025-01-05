package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "stocksymbols")
public class StockSymbol {
    @Id
    @Column(name = "StockSymbol", nullable = false, length = 5)
    private String stockSymbol;

    @Column(name = "StockName", nullable = false, length = 25)
    private String stockName;

    public String getStockSymbol() {
        return stockSymbol;
    }

    public void setStockSymbol(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

}