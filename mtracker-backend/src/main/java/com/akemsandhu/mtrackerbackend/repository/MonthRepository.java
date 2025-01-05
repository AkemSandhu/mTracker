package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.Month;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;

public interface MonthRepository extends JpaRepository<Month, Double> {
}