package com.akemsandhu.mtrackerbackend;

import com.akemsandhu.mtrackerbackend.model.User;
import com.akemsandhu.mtrackerbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
//
    private String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = md.digest(password.getBytes());
            return Base64.getEncoder().encodeToString(hashedBytes);
        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
            return null;
        }
    }

    public User createUser(User user) {
        user.setUserHashedPassword(hashPassword(user.getUserHashedPassword()));
        return userRepository.save(user);
    }

    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

//    public Optional<User> getUserByEmail(String email) {
//        return userRepository.findByUserEmail(email);
//    }

    public int checkUserExists(String userName, String password) {
        String hashedPassword = hashPassword(password);
        return userRepository.checkUser(userName, hashedPassword);
    }

//    public boolean authenticateUser(String email, String password) {
//        Optional<User> user = userRepository.findByUserEmail(email);
//        if (user.isPresent()) {
//            return passwordEncoder.matches(password, user.get().getUserHashedPassword());
//        }
//        return false;
//    }
}
