package com.melo.employee_reimbursement_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.melo.employee_reimbursement_system.dto.UsersDTO;
import com.melo.employee_reimbursement_system.model.Users;
import com.melo.employee_reimbursement_system.service.UsersService;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers(@CookieValue(name = "jwt") String token) {
        List<UsersDTO> users = usersService.getAllUsers(token);
        return ResponseEntity.ok().body(users);
    }

    //delete a user
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@CookieValue(name = "jwt") String token, @PathVariable long userId) {
        usersService.deleteUserById(userId, token);
        return ResponseEntity.ok().body("User deleted.");
    }

    //update a user
    @PatchMapping("/promote/{userId}")
    public ResponseEntity<?> promoteUser(@CookieValue(name = "jwt") String token, @PathVariable long userId){
        Users promotedUser = usersService.promoteUserById(userId, token);
        return ResponseEntity.ok().body(promotedUser);
    }
    
}
