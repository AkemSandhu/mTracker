package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.model.BudgetEntryId;
import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.repository.BudgetEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetEntryService {
    @Autowired
    private BudgetEntryRepository budgetEntryRepository;

    public List<BudgetEntry> getBudgetEntriesByUser(int userID) {
        return budgetEntryRepository.findByUserId(userID);
    }

    public BudgetEntry getBudgetEntriesByID(BudgetEntryId id) {
        return budgetEntryRepository.findByID(id);
    }

    public BudgetEntry createBudgetEntry(BudgetEntry budgetEntry) {
        return budgetEntryRepository.save(budgetEntry);
    }

    public void updateBudgetEntryBalance(int userID, int budgetEntryYear, int budgetEntryMonth, String budgetEntryAccount, double newAmount) {
        BudgetEntryId budgetEntryId = new BudgetEntryId();
        budgetEntryId.setUserID(userID);
        budgetEntryId.setBudgetYear(budgetEntryYear);
        budgetEntryId.setBudgetMonth(budgetEntryMonth);
        budgetEntryId.setBudgetAccount(budgetEntryAccount);
        BudgetEntry budgetEntry = budgetEntryRepository.findByID(budgetEntryId);
        if (budgetEntry != null) {
            budgetEntry.setBudgetAmount(newAmount);
            budgetEntryRepository.save(budgetEntry);
        }
    }

    public void deleteBudgetEntry(int userID, int budgetEntryYear, int budgetEntryMonth, String budgetEntryAccount) {
        BudgetEntryId id = new BudgetEntryId();
        id.setUserID(userID);
        id.setBudgetYear(budgetEntryYear);
        id.setBudgetMonth(budgetEntryMonth);
        id.setBudgetAccount(budgetEntryAccount);
        budgetEntryRepository.deleteByID(id);
    }
}
