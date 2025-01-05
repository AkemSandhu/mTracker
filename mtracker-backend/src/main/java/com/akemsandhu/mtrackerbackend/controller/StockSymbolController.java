package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.AccountType;
import com.akemsandhu.mtrackerbackend.model.StockSymbol;
import com.akemsandhu.mtrackerbackend.service.AccountTypeService;
import com.akemsandhu.mtrackerbackend.service.StockSymbolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/stocksymbols")
public class StockSymbolController {

    @Autowired
    StockSymbolService stockSymbolService;

    @GetMapping("/symbol")
    public ResponseEntity<List<StockSymbol>> getAllAccountTypes() {
        return ResponseEntity.ok(stockSymbolService.getAllStockSymbols());
    }
}
