package com.example.backend.Controller;


import com.example.backend.Repositories.IUserRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class UserController{




    @GetMapping("/{userid}")
    public HashMap<String, String> userInfo(){
        HashMap<String, String>  map = new HashMap<>();

        map.put("name", "john");
        map.put("id", "2134214141");
        map.put("password", "password");

        return map;
    }
}