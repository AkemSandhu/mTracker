package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;

import java.io.Serializable;
import java.util.Objects;

public class TrackerEntryId implements Serializable {

    @Column(name = "UserID", nullable = false)
    private Integer userID;

    @Column(name = "Year", nullable = false)
    private Integer year;

    @Column(name = "Month", nullable = false, precision = 10)
    private Integer month;

    @Column(name = "TransactionCategoryID", nullable = false, length = 5)
    private String transactionCategoryID;

    public Integer getUserID() {
        return userID;
    }

    public Integer getYear() {
        return year;
    }

    public Integer getMonth() {
        return month;
    }

    public String getTransactionCategoryID() {
        return transactionCategoryID;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        TrackerEntryId that = (TrackerEntryId) o;
        return Objects.equals(userID, that.userID) && Objects.equals(year, that.year) && Objects.equals(month, that.month) && Objects.equals(transactionCategoryID, that.transactionCategoryID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userID, year, month, transactionCategoryID);
    }
}
