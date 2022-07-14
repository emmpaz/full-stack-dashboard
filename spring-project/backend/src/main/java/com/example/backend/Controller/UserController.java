package com.example.backend.Controller;


import com.example.backend.Models.User;
import com.example.backend.Repositories.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController{


    IUserRepo iUserRepo;
    @Autowired
    public UserController(IUserRepo iUserRepo){
        this.iUserRepo = iUserRepo;
    }


    @GetMapping("/user")
    public List<User> allUsers(){
        return iUserRepo.findAll();
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUserById(
            @PathVariable("id") Long id){
        return iUserRepo.findById(id);
    }

    @PostMapping("/user")
    public void addUser(
            @RequestBody User user){
        iUserRepo.save(user);
    }


}