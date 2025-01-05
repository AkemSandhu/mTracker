package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    @Query("SELECT a FROM Transaction a WHERE a.userID = :userID")
    List<Transaction> findByUserId(@Param("userID") int userID);

    @Transactional
    @Modifying
    @Query("delete from Transaction a where a.id = ?1")
    void deleteByID(int id);

    @Query("select a from Transaction a where a.id = ?1")
    Transaction findByID(int id);

    int id(Integer id);
}