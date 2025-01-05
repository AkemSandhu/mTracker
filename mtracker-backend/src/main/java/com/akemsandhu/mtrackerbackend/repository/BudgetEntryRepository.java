package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.BudgetEntry;
import com.akemsandhu.mtrackerbackend.model.BudgetEntryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BudgetEntryRepository extends JpaRepository<BudgetEntry, BudgetEntryId> {
    @Query("SELECT a FROM BudgetEntry a WHERE a.id.userID = :userID")
    List<BudgetEntry> findByUserId(@Param("userID") int userID);

    @Transactional
    @Modifying
    @Query("delete from BudgetEntry a where a.id = ?1")
    void deleteByID(BudgetEntryId id);

    @Query("select a from BudgetEntry a where a.id = ?1")
    BudgetEntry findByID(BudgetEntryId id);
}