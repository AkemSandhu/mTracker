package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "accounts")
public class Account {
    @EmbeddedId
    private AccountId id;

    @Column(name = "AccountBalance", nullable = false)
    private Double accountBalance;

    public AccountId getId() {
        return id;
    }

    public void setId(AccountId id) {
        this.id = id;
    }

    public Double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(Double accountBalance) {
        this.accountBalance = accountBalance;
    }

}