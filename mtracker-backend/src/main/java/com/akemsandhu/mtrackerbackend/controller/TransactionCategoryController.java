package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.StockSymbol;
import com.akemsandhu.mtrackerbackend.model.TransactionCategory;
import com.akemsandhu.mtrackerbackend.service.StockSymbolService;
import com.akemsandhu.mtrackerbackend.service.TransactionCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/transactioncategories")
public class TransactionCategoryController {

    @Autowired
    TransactionCategoryService transactionCategoryService;

    @GetMapping("/category")
    public ResponseEntity<List<TransactionCategory>> getAllAccountTypes() {
        return ResponseEntity.ok(transactionCategoryService.getAllTransactionCategories());
    }
}
