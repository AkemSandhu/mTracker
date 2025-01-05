package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.Transaction;
import com.akemsandhu.mtrackerbackend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getTransactionsByUser(int userID) {
        return transactionRepository.findByUserId(userID);
    }

    public Transaction getTransactionByID(int id) {
        return transactionRepository.findByID(id);
    }

    public Transaction createTransaction(Transaction transaction) {
        transaction.setTransactionYear(Integer.parseInt(transaction.getTransactionDate().toString().substring(0,4)));
        transaction.setTransactionMonthID(Integer.parseInt(transaction.getTransactionDate().toString().substring(5,7)));
        return transactionRepository.save(transaction);
    }

    public void updateTransactionBalance(int id, double newAmount) {
        Transaction transaction = transactionRepository.findByID(id);
        if (transaction != null) {
            transaction.setTransactionAmount(newAmount);
            transactionRepository.save(transaction);
        }
    }

    public void updateTransaction(int id, LocalDate date, String categoryID, double newAmount, String transactionDescription) {
        Transaction transaction = transactionRepository.findByID(id);
        if (transaction != null) {
            transaction.setTransactionDate(date);
            transaction.setTransactionYear(Integer.parseInt(date.toString().substring(0,4)));
            transaction.setTransactionMonthID(Integer.parseInt(date.toString().substring(5,7)));
            transaction.setCategoryID(categoryID);
            transaction.setTransactionAmount(newAmount);
            transaction.setTransactionDescription(transactionDescription);
            transactionRepository.save(transaction);
        }
    }

    public void deleteTransaction(int id) {
        transactionRepository.deleteByID(id);
    }
}