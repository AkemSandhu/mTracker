package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.model.TrackerEntry;
import com.akemsandhu.mtrackerbackend.service.TrackerEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/trackerentries")
public class TrackerEntryController {
    @Autowired
    private TrackerEntryService trackerEntryService;

    @GetMapping("tracker")
    public List<TrackerEntry> getAllTrackerEntries() {
        return trackerEntryService.findAll();
    }

    @GetMapping("/user/{userID}")
    public ResponseEntity<List<TrackerEntry>> getTrackerEntriesByUser(@PathVariable int userID) {
        return ResponseEntity.ok(trackerEntryService.getTrackerEntriesByUser(userID));
    }
}
