package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.model.BudgetEntryId;
import com.akemsandhu.mtrackerbackend.model.TrackerEntry;
import com.akemsandhu.mtrackerbackend.repository.TrackerEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackerEntryService {
    @Autowired
    private TrackerEntryRepository trackerEntryRepository;

    public List<TrackerEntry> findAll() {
        return trackerEntryRepository.findAll();
    }

    public List<TrackerEntry> getTrackerEntriesByUser(int userID) {
        return trackerEntryRepository.findByUserId(userID);
    }

}
