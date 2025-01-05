package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.TransactionCategory;
import com.akemsandhu.mtrackerbackend.repository.TransactionCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionCategoryService {

    @Autowired
    TransactionCategoryRepository transactionCategoryRepository;

    public List<TransactionCategory> getAllTransactionCategories() {
        return transactionCategoryRepository.findAll();
    }
}
