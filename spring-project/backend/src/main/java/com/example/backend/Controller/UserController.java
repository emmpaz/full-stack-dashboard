package com.example.backend.Controller;


import com.example.backend.Models.User;
import com.example.backend.Repositories.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class UserController{

    @Autowired
    IUserRepo userRepo;

    public UserController(IUserRepo userRepo){
        this.userRepo = userRepo;
    }


    @GetMapping("/user")
    public List<User> allUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(
            @PathVariable("id") String id){
        return userRepo.getReferenceById(Long.valueOf(id));
    }


}