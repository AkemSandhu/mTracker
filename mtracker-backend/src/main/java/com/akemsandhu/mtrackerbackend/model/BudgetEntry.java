package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name = "budgetentries")
public class BudgetEntry {
    @EmbeddedId
    private BudgetEntryId id;

    @Column(name = "BudgetAmount", precision = 10) //, scale = 2
    private Double budgetAmount;

    public BudgetEntryId getId() {
        return id;
    }

    public void setId(BudgetEntryId id) {
        this.id = id;
    }

    public Double getBudgetAmount() {
        return budgetAmount;
    }

    public void setBudgetAmount(Double budgetAmount) {
        this.budgetAmount = budgetAmount;
    }

}