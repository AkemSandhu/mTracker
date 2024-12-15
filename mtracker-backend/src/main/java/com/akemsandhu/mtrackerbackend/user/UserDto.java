package com.akemsandhu.mtrackerbackend.user;

import java.io.Serializable;
import java.util.Objects;

/**
 * DTO for {@link User}
 */
public class UserDto implements Serializable {
    private final Integer id;
    private final String userName;
    private final Integer userPassword;

    public UserDto(Integer id, String userName, Integer userPassword) {
        this.id = id;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public Integer getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public Integer getUserPassword() {
        return userPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDto entity = (UserDto) o;
        return Objects.equals(this.id, entity.id) &&
                Objects.equals(this.userName, entity.userName) &&
                Objects.equals(this.userPassword, entity.userPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, userPassword);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "userName = " + userName + ", " +
                "userPassword = " + userPassword + ")";
    }
}