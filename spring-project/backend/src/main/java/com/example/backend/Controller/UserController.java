package com.example.backend.Controller;


import com.example.backend.Models.User;
import com.example.backend.Repositories.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class UserController{

    @Autowired
    IUserRepo userRepo;

    public UserController(IUserRepo userRepo){
        this.userRepo = userRepo;
    }


    @GetMapping("/users")
    public List<User> allUsers(){
        return this.userRepo.findAll();
    }
}