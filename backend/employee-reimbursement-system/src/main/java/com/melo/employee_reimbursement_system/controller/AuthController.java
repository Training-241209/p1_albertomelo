package com.melo.employee_reimbursement_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.melo.employee_reimbursement_system.dto.JwtResponseDTO;
import com.melo.employee_reimbursement_system.dto.LoginRequestDTO;
import com.melo.employee_reimbursement_system.dto.UsersDTO;
import com.melo.employee_reimbursement_system.model.Users;
import com.melo.employee_reimbursement_system.service.AuthService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest, HttpServletResponse response) {
        JwtResponseDTO token = authService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());

        Cookie jwtCookie = new Cookie("jwt", token.getToken());
        jwtCookie.setPath("/");
        jwtCookie.setHttpOnly(true);
        response.addCookie(jwtCookie);

        return ResponseEntity.ok().body(token); 
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        Cookie jwtCookie = new Cookie("jwt", "");
        jwtCookie.setMaxAge(0);
        jwtCookie.setPath("/");
        jwtCookie.setHttpOnly(true);
        response.addCookie(jwtCookie);

        return ResponseEntity.ok().body("Logged out successfully."); 
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Users user) {
        authService.registerUser(user); 
        return ResponseEntity.status(HttpStatus.CREATED).body("User successfully registered!");
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@CookieValue(name = "jwt", required = false) String token) {

        UsersDTO user = authService.getUser(token);

        return ResponseEntity.ok().body(user);
    }
}
