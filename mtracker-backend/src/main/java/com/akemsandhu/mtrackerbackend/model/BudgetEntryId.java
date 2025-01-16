package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Embeddable
public class BudgetEntryId implements Serializable {
    @Serial
    private static final long serialVersionUID = 1730956036262777950L;
    @Column(name = "UserID", nullable = false)
    private Integer userID;

    @Column(name = "BudgetYear", nullable = false)
    private Integer budgetYear;

    @Column(name = "BudgetMonth", nullable = false, precision = 10)
    private Integer budgetMonth;

    @Column(name = "BudgetAccount", nullable = false, length = 5)
    private String budgetAccount;

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Integer getBudgetYear() {
        return budgetYear;
    }

    public void setBudgetYear(Integer budgetYear) {
        this.budgetYear = budgetYear;
    }

    public Integer getBudgetMonth() {
        return budgetMonth;
    }

    public void setBudgetMonth(Integer budgetMonth) {
        this.budgetMonth = budgetMonth;
    }

    public String getBudgetAccount() {
        return budgetAccount;
    }

    public void setBudgetAccount(String budgetAccount) {
        this.budgetAccount = budgetAccount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BudgetEntryId entity = (BudgetEntryId) o;
        return Objects.equals(this.budgetMonth, entity.budgetMonth) &&
                Objects.equals(this.budgetYear, entity.budgetYear) &&
                Objects.equals(this.budgetAccount, entity.budgetAccount) &&
                Objects.equals(this.userID, entity.userID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(budgetMonth, budgetYear, budgetAccount, userID);
    }

}