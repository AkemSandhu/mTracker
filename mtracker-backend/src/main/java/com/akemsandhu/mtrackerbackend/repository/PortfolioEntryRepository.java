package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.PortfolioEntry;
import com.akemsandhu.mtrackerbackend.model.PortfolioEntryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PortfolioEntryRepository extends JpaRepository<PortfolioEntry, PortfolioEntryId> {
    @Query("SELECT a FROM PortfolioEntry a WHERE a.id.userID = :userID")
    List<PortfolioEntry> findByUserId(@Param("userID") int userID);

    @Transactional
    @Modifying
    @Query("delete from PortfolioEntry a where a.id = ?1")
    void deleteByID(PortfolioEntryId id);

    @Query("select a from PortfolioEntry a where a.id = ?1")
    PortfolioEntry findByID(PortfolioEntryId id);
}