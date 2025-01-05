package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.PortfolioEntry;
import com.akemsandhu.mtrackerbackend.model.PortfolioEntryId;
import com.akemsandhu.mtrackerbackend.model.PortfolioEntry;
import com.akemsandhu.mtrackerbackend.repository.PortfolioEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class PortfolioEntryService {
    @Autowired
    private PortfolioEntryRepository portfolioEntryRepository;

    public List<PortfolioEntry> getPortfolioEntriesByUser(int userID) {
        return portfolioEntryRepository.findByUserId(userID);
    }

    public PortfolioEntry getPortfolioEntryById(PortfolioEntryId portfolioEntryId) {
        return portfolioEntryRepository.findById(portfolioEntryId).get();
    }

    public PortfolioEntry createPortfolioEntry(PortfolioEntry portfolioEntry) {
        portfolioEntry.setTransactionAmount(-portfolioEntry.getStockUnitPrice()*portfolioEntry.getStockQuantity());
        return portfolioEntryRepository.save(portfolioEntry);
    }

    public void updatePortfolioEntry(int userID, String date, String stockSymbol, double newUnitPrice, int newQuantity) {
        PortfolioEntryId portfolioEntryId = new PortfolioEntryId();
        portfolioEntryId.setUserID(userID);
        portfolioEntryId.setTransactionDate(LocalDate.parse(date));
        portfolioEntryId.setStockSymbol(stockSymbol);
        PortfolioEntry portfolioEntry = portfolioEntryRepository.findByID(portfolioEntryId);
        if (portfolioEntry != null) {
            portfolioEntry.setStockUnitPrice(newUnitPrice);
            portfolioEntry.setStockQuantity(newQuantity);
            portfolioEntry.setTransactionAmount(-newUnitPrice*newQuantity);
            portfolioEntryRepository.save(portfolioEntry);
        }
    }

    public void deletePortfolioEntry(int userID, String date, String stockSymbol) {
        PortfolioEntryId id = new PortfolioEntryId();
        id.setUserID(userID);
        id.setTransactionDate(LocalDate.parse(date));
        id.setStockSymbol(stockSymbol);
        portfolioEntryRepository.deleteByID(id);
    }
}
