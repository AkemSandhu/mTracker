package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.Account;
import com.akemsandhu.mtrackerbackend.model.AccountId;
import com.akemsandhu.mtrackerbackend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public List<Account> getAccountsById(Integer userID) {
        return accountRepository.findByUserId(userID);
    }

    public Account getAccountById(AccountId id) {
        return accountRepository.findById(id).get();
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public void updateAccountBalance(int userID, String accountType, double newBalance) {
        AccountId accountId = new AccountId();
        accountId.setAccountType(accountType);
        accountId.setUserID(userID);
        Account account = accountRepository.findByUserIDAndAccountType(accountId);
        if (account != null) {
            account.setAccountBalance(account.getAccountBalance()+newBalance);
            accountRepository.save(account);
        }
    }

    public void deleteAccount(int userID, String accountType) {
        AccountId id = new AccountId();
        id.setAccountType(accountType);
        id.setUserID(userID);
        accountRepository.deleteByUserIDAndAccountType(id);
    }
}
