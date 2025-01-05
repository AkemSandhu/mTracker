package com.akemsandhu.mtrackerbackend.repository;

import com.akemsandhu.mtrackerbackend.model.Account;
import com.akemsandhu.mtrackerbackend.model.AccountId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, AccountId> {
  // Find all accounts by user ID
  @Query("SELECT a FROM Account a WHERE a.id.userID = :userID")
  List<Account> findByUserId(@Param("userID") int userID);

//  // Find an account by user ID and account type
//  @Query("SELECT a FROM Account a WHERE a.id.userID = :userID AND a.id.accountType = :accountType")
//  Account findByUserIDAndAccountType(@Param("userID") int userID, @Param("accountType") String accountType);


  @Modifying
  @Transactional
  @Query("DELETE FROM Account a WHERE a.id.userID = :userID AND a.id.accountType = :accountType")
  Account deleteUserIDAndAccountType(@Param("userID") int userID, @Param("accountType") String accountType);

  @Transactional
  @Modifying
  @Query("delete from Account a where a.id = ?1")
  void deleteByUserIDAndAccountType(AccountId id);

  @Query("select a from Account a where a.id = ?1")
  Account findByUserIDAndAccountType(AccountId id);
}