package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}