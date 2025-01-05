package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "years")
public class Year {
    @Id
    @Column(name = "Year", nullable = false)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    //TODO [Reverse Engineering] generate columns from DB
}