package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.StockSymbol;
import com.akemsandhu.mtrackerbackend.repository.StockSymbolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StockSymbolService {

    @Autowired
    StockSymbolRepository stockSymbolRepositoryRepository;

    public List<StockSymbol> getAllStockSymbols() {
        return stockSymbolRepositoryRepository.findAll();
    }

}
