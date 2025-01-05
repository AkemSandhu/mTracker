package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.Year;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YearRepository extends JpaRepository<Year, Integer> {
}