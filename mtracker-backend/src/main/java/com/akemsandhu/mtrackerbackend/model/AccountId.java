package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class AccountId implements Serializable {
    @Serial
    private static final long serialVersionUID = 9086268339662114729L;
    @Column(name = "UserID", nullable = false)
    private Integer userID;

    @Column(name = "AccountType", nullable = false, length = 6)
    private String accountType;

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        AccountId entity = (AccountId) o;
        return Objects.equals(this.accountType, entity.accountType) &&
                Objects.equals(this.userID, entity.userID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(accountType, userID);
    }

}