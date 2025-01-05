package com.akemsandhu.mtrackerbackend.service;

import com.akemsandhu.mtrackerbackend.model.AccountType;
import com.akemsandhu.mtrackerbackend.repository.AccountTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountTypeService {

    @Autowired
    AccountTypeRepository accountTypeRepository;

    public List<AccountType> getAllAccountTypes() {
        return accountTypeRepository.findAll();
    }
}
