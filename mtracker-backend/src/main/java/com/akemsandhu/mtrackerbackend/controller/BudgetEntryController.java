package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.model.BudgetEntryId;
import com.akemsandhu.mtrackerbackend.service.BudgetEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/budgetentries")
public class BudgetEntryController {
    @Autowired
    private BudgetEntryService budgetEntryService;

    @GetMapping("/user/{userID}")
    public ResponseEntity<List<BudgetEntry>> getBudgetEntriesByUser(@PathVariable int userID) {
        return ResponseEntity.ok(budgetEntryService.getBudgetEntriesByUser(userID));
    }

    @GetMapping("/id/{userID}/{budgetEntryYear}/{budgetEntryMonth}/{budgetEntryAccount}")
    public ResponseEntity<BudgetEntry> getBudgetEntry(@PathVariable int userID, @PathVariable int budgetEntryYear, @PathVariable int budgetEntryMonth, @PathVariable String budgetEntryAccount) {
        BudgetEntryId id = new BudgetEntryId();
        id.setUserID(userID);
        id.setBudgetYear(budgetEntryYear);
        id.setBudgetMonth(budgetEntryMonth);
        id.setBudgetAccount(budgetEntryAccount);
        return ResponseEntity.ok(budgetEntryService.getBudgetEntriesByID(id));
    }

    @PostMapping
    public ResponseEntity<BudgetEntry> createBudgetEntry(@RequestBody BudgetEntry budgetEntry) {
        return ResponseEntity.ok(budgetEntryService.createBudgetEntry(budgetEntry));
    }

    @PutMapping("/balance/{userID}/{budgetYear}/{budgetMonth}/{budgetAccount}/{newAmount}")
    public ResponseEntity<Void> updateBudgetEntryBalance(@PathVariable int userID, @PathVariable int budgetYear, @PathVariable int budgetMonth, @PathVariable String budgetAccount, @PathVariable double newAmount) {
        budgetEntryService.updateBudgetEntryBalance(userID, budgetYear, budgetMonth, budgetAccount, newAmount);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/budgetEntry/{userID}/{budgetYear}/{budgetMonth}/{budgetAccount}")
    String deleteUser(@PathVariable int userID, @PathVariable int budgetYear, @PathVariable int budgetMonth, @PathVariable String budgetAccount){
        budgetEntryService.deleteBudgetEntry(userID, budgetYear, budgetMonth, budgetAccount);
        return  "User with id has been deleted success.";
    }
}