package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.AccountType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountTypeRepository extends JpaRepository<AccountType, String> {
}