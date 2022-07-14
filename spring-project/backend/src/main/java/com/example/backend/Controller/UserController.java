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
    IUserRepo iUserRepo;

    public UserController(IUserRepo iUserRepo){
        this.iUserRepo = iUserRepo;
    }


    @GetMapping("/user")
    public List<User> allUsers(){
        return iUserRepo.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(
            @PathVariable("id") String id){
        return iUserRepo.getReferenceById(Long.valueOf(id));
    }

    @PostMapping("/user")
    public void addUser(
            @RequestBody User user){
        iUserRepo.save(user);
    }


}