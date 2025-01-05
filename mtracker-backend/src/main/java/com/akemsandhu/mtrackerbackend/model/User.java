package com.akemsandhu.mtrackerbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID", nullable = false)
    private Integer id;

    @Column(name = "UserName", length = 20)
    private String userName;

    @Column(name = "UserEmail", length = 50)
    private String userEmail;

    @Column(name = "UserFirstName", length = 100)
    private String userFirstName;

    @Column(name = "UserLastName", length = 100)
    private String userLastName;

    @Column(name = "UserHashedPassword", length = 64)
    private String userHashedPassword;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getUserHashedPassword() {
        return userHashedPassword;
    }

    public void setUserHashedPassword(String userHashedPassword) {
        this.userHashedPassword = userHashedPassword;
    }

}