package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.model.TrackerEntry;
import com.akemsandhu.mtrackerbackend.model.TrackerEntryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrackerEntryRepository extends JpaRepository<TrackerEntry, TrackerEntryId> {
  @Query("SELECT a FROM TrackerEntry a WHERE a.id.userID = :userID")
  List<TrackerEntry> findByUserId(@Param("userID") int userID);
}