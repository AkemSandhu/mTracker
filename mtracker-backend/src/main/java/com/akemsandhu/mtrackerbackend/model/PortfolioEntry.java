package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "portfolioentries")
public class PortfolioEntry {
    @EmbeddedId
    private PortfolioEntryId id;

    @Column(name = "StockUnitPrice", nullable = false)
    private Double stockUnitPrice;

    @Column(name = "StockQuantity", nullable = false)
    private Integer stockQuantity;

    @Column(name = "TransactionAmount", nullable = false)
    private Double transactionAmount;

    public PortfolioEntryId getId() {
        return id;
    }

    public void setId(PortfolioEntryId id) {
        this.id = id;
    }

    public Double getStockUnitPrice() {
        return stockUnitPrice;
    }

    public void setStockUnitPrice(Double stockUnitPrice) {
        this.stockUnitPrice = stockUnitPrice;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public Double getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(Double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

}