package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TransactionID", nullable = false)
    private Integer id;

    //@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "UserID", nullable = false)
    private Integer userID;

    @Column(name = "TransactionDate", nullable = false)
    private LocalDate transactionDate;

    //@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "TransactionYear", nullable = false)
    private Integer transactionYear;

    //@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "TransactionMonthID", nullable = false)
    private Integer transactionMonthID;

    //@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "CategoryID", nullable = false)
    private String categoryID;

    @Column(name = "TransactionAmount", precision = 10) //, scale = 2)
    private Double transactionAmount;

    @Column(name = "TransactionDescription", length = 50)
    private String transactionDescription;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public LocalDate getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Integer getTransactionYear() {
        return transactionYear;
    }

    public void setTransactionYear(Integer transactionYear) {
        this.transactionYear = transactionYear;
    }

    public Integer getTransactionMonthID() {
        return transactionMonthID;
    }

    public void setTransactionMonthID(Integer transactionMonthID) {
        this.transactionMonthID = transactionMonthID;
    }

    public String getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(String categoryID) {
        this.categoryID = categoryID;
    }

    public Double getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(Double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public String getTransactionDescription() {
        return transactionDescription;
    }

    public void setTransactionDescription(String transactionDescription) {
        this.transactionDescription = transactionDescription;
    }

}