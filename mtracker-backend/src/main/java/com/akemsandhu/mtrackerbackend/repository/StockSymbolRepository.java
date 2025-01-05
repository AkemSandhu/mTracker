package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.StockSymbol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockSymbolRepository extends JpaRepository<StockSymbol, String> {
}