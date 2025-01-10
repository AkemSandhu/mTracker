package com.akemsandhu.mtrackerbackend.controller;

import com.akemsandhu.mtrackerbackend.UserService;
import com.akemsandhu.mtrackerbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

//    @PostMapping("/login")
//    public ResponseEntity<User> login(@RequestBody User user) {
//        if (userService.authenticateUser(user.getUserEmail(), user.getUserHashedPassword())) {
//            return ResponseEntity.ok(userService.getUserByEmail(user.getUserEmail()).get());
//        } else {
//            return ResponseEntity.status(401).build();
//        }
//    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable int id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("check/{user}/{password}")
    public int checkUser(@PathVariable String user, @PathVariable String password) {
        return userService.checkUserExists(user, password);
    }
}