package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.PortfolioEntry;
import com.akemsandhu.mtrackerbackend.model.Transaction;
import com.akemsandhu.mtrackerbackend.service.AccountService;
import com.akemsandhu.mtrackerbackend.service.PortfolioEntryService;
import com.akemsandhu.mtrackerbackend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/portfolioentries")
public class PortfolioEntryController {
    @Autowired
    private PortfolioEntryService portfolioEntryService;
    @Autowired
    private TransactionService transactionService;
    @Autowired
    private AccountService accountService;

    @GetMapping("/user/{userID}")
    public ResponseEntity<List<PortfolioEntry>> getPortfolioEntriesByUser(@PathVariable int userID) {
        return ResponseEntity.ok(portfolioEntryService.getPortfolioEntriesByUser(userID));
    }

    @PostMapping
    public ResponseEntity<PortfolioEntry> createPortfolioEntry(@RequestBody PortfolioEntry portfolioEntry) {
        accountService.updateAccountBalance(portfolioEntry.getId().getUserID(), "SAVING", -portfolioEntry.getStockQuantity()*portfolioEntry.getStockUnitPrice());
        Transaction transaction = new Transaction();
        transaction.setUserID(portfolioEntry.getId().getUserID());
        transaction.setTransactionDate(portfolioEntry.getId().getTransactionDate());
        transaction.setCategoryID("INVS");
        transaction.setTransactionAmount(-portfolioEntry.getStockUnitPrice()*portfolioEntry.getStockQuantity());
        transaction.setTransactionDescription("test");
        transactionService.createTransaction(transaction);
        return ResponseEntity.ok(portfolioEntryService.createPortfolioEntry(portfolioEntry));
    }

    @PutMapping("/balance/{userID}/{date}/{stockSymbol}/{newUnitPrice}/{newQuantity}")
    public ResponseEntity<Void> updatePortfolioEntry(@PathVariable int userID, @PathVariable String date, @PathVariable String stockSymbol, @PathVariable double newUnitPrice, @PathVariable int newQuantity) {
        portfolioEntryService.updatePortfolioEntry(userID, date, stockSymbol, newUnitPrice, newQuantity);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/portfolioEntry/{userID}/{date}/{stockSymbol}")
    String deletePortfolioEntries(@PathVariable int userID, @PathVariable String date, @PathVariable String stockSymbol){
        portfolioEntryService.deletePortfolioEntry(userID, date, stockSymbol);
        return  "User with id has been deleted success.";
    }
}