package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {


    @Query("SELECT a FROM User a WHERE a.userEmail = :userEmail")
    Optional<User> findByUserEmail(@Param("userEmail") String email);

    @Query("select u.id from User u where u.userName = ?1 and u.userHashedPassword = ?2")
    int checkUser(String userName, String userHashedPassword);
}