package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Embeddable
public class PortfolioEntryId implements Serializable {
    private static final long serialVersionUID = 2314155685433153430L;
    @Column(name = "TransactionDate", nullable = false)
    private LocalDate transactionDate;

    @Column(name = "UserID", nullable = false)
    private Integer userID;

    @Column(name = "StockSymbol", nullable = false, length = 5)
    private String stockSymbol;

    public LocalDate getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getStockSymbol() {
        return stockSymbol;
    }

    public void setStockSymbol(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        PortfolioEntryId entity = (PortfolioEntryId) o;
        return Objects.equals(this.stockSymbol, entity.stockSymbol) &&
                Objects.equals(this.transactionDate, entity.transactionDate) &&
                Objects.equals(this.userID, entity.userID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(stockSymbol, transactionDate, userID);
    }

}