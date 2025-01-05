package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.Account;
import com.akemsandhu.mtrackerbackend.model.AccountId;
import com.akemsandhu.mtrackerbackend.repository.AccountRepository;
import com.akemsandhu.mtrackerbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountRepository accountRepository;

    @GetMapping("/user/{userID}")
    public ResponseEntity<List<Account>> getAccountsById(@PathVariable Integer userID) {
        return ResponseEntity.ok(accountService.getAccountsById(userID));
    }

    @GetMapping("/user/{userID}/{accountType}")
    public ResponseEntity<Account> getAccountById(@PathVariable Integer userID, @PathVariable String accountType) {
        AccountId id = new AccountId();
        id.setUserID(userID);
        id.setAccountType(accountType);
        return ResponseEntity.ok(accountService.getAccountById(id));
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        return ResponseEntity.ok(accountService.createAccount(account));
    }

    @PutMapping("/balance/{userID}/{accountType}/{newBalance}")
    public ResponseEntity<Void> updateAccountBalance(@PathVariable int userID, @PathVariable String accountType, @PathVariable double newBalance) {
        accountService.updateAccountBalance(userID, accountType, newBalance);
        return ResponseEntity.noContent().build();
    }

//    @DeleteMapping("/account/{userID}/{accountType}")
//    String deleteUser(@PathVariable Integer userID, @PathVariable String accountType) {
//        accountRepository.deleteUserIDAndAccountType(userID, accountType);
//        return  "User with id has been deleted success.";
//    }

    @DeleteMapping("/account/{userID}/{accountType}")
    String deleteUser(@PathVariable Integer userID, @PathVariable String accountType){
        accountService.deleteAccount(userID, accountType);
        return  "User with id has been deleted success.";
    }

}