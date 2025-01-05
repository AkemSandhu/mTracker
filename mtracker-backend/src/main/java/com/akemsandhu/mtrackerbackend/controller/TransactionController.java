package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.Transaction;
import com.akemsandhu.mtrackerbackend.service.AccountService;
import com.akemsandhu.mtrackerbackend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @Autowired
    private AccountService accountService;

    @GetMapping("/id/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable int id) {
        return ResponseEntity.ok(transactionService.getTransactionByID(id));
    }

    @GetMapping("/user/{userID}")
    public ResponseEntity<List<Transaction>> getTransactionsByUser(@PathVariable int userID) {
        return ResponseEntity.ok(transactionService.getTransactionsByUser(userID));
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        accountService.updateAccountBalance(transaction.getUserID(), "CHCKNG", transaction.getTransactionAmount());
        return ResponseEntity.ok(transactionService.createTransaction(transactionService.createTransaction(transaction)));
    }

    @PutMapping("/balance/{id}/{newAmount}")
    public ResponseEntity<Void> updateTransactionBalance(@PathVariable int id, @PathVariable double newAmount) {
        Transaction transaction = transactionService.getTransactionByID(id);
        accountService.updateAccountBalance(transaction.getUserID(), "CHCKNG", newAmount-transaction.getTransactionAmount());
        transactionService.updateTransactionBalance(id, newAmount);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{id}/{date}/{categoryID}/{newAmount}/{transactionDescription}")
    public ResponseEntity<Void> updateTransaction(@PathVariable int id, @PathVariable LocalDate date, @PathVariable String categoryID, @PathVariable double newAmount, @PathVariable String transactionDescription) {
        Transaction transaction = transactionService.getTransactionByID(id);
        accountService.updateAccountBalance(transaction.getUserID(), "CHCKNG", newAmount-transaction.getTransactionAmount());
        transactionService.updateTransaction(id, date, categoryID, newAmount, transactionDescription);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/transaction/{id}")
    String deleteUser(@PathVariable int id){
        Transaction transaction = transactionService.getTransactionByID(id);
        accountService.updateAccountBalance(transaction.getUserID(), "CHCKNG", -transaction.getTransactionAmount());
        transactionService.deleteTransaction(id);
        return  "User with id has been deleted success.";
    }
}