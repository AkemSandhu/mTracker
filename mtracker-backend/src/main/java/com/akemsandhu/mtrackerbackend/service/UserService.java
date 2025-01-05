package com.akemsandhu.mtrackerbackend;

import com.akemsandhu.mtrackerbackend.model.User;
import com.akemsandhu.mtrackerbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
//
//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
//
//    public User createUser(User user) {
//        user.setUserHashedPassword(passwordEncoder.encode(user.getUserHashedPassword()));
//        return userRepository.save(user);
//    }
//
//    public Optional<User> getUserById(int id) {
//        return userRepository.findById(id);
//    }
//
//    public Optional<User> getUserByEmail(String email) {
//        return userRepository.findByUserEmail(email);
//    }
//
//    public boolean authenticateUser(String email, String password) {
//        Optional<User> user = userRepository.findByUserEmail(email);
//        if (user.isPresent()) {
//            return passwordEncoder.matches(password, user.get().getUserHashedPassword());
//        }
//        return false;
//    }
}
