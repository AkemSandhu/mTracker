package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.View;

@Entity
@Immutable
@Table(name = "trackerentries")
public class TrackerEntry {
    @EmbeddedId
    private TrackerEntryId id;

    @Column(name="TransactionCategoryDescription", nullable = false)
    private String transactionCategoryDescription;

    @Column(name="BudgetAmount", nullable = false)
    private Double budgetAmount;

    @Column(name="TransactionAmount", nullable = false)
    private Double transactionAmount;

    @Column(name="BudgetRemaining", nullable = false)
    private Double budgetRemaining;

    public TrackerEntryId getId() {
        return id;
    }

    public String getTransactionCategoryDescription() {
        return transactionCategoryDescription;
    }

    public Double getBudgetAmount() {
        return budgetAmount;
    }

    public Double getTransactionAmount() {
        return transactionAmount;
    }

    public Double getBudgetRemaining() {
        return budgetRemaining;
    }
}
