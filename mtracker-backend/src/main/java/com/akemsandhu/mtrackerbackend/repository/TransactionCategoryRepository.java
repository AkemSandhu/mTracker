package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.TransactionCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionCategoryRepository extends JpaRepository<TransactionCategory, String> {
}