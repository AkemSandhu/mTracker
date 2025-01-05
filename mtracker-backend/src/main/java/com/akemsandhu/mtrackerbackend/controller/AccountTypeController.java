package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.model.AccountType;
import com.akemsandhu.mtrackerbackend.service.AccountTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/accounttypes")
public class AccountTypeController {

    @Autowired
    AccountTypeService accountTypeService;

    @GetMapping("/type")
    public ResponseEntity<List<AccountType>> getAllAccountTypes() {
        return ResponseEntity.ok(accountTypeService.getAllAccountTypes());
    }
}
