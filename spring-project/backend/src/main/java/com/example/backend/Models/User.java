package com.example.backend.Models;

import org.hibernate.annotations.Cache;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name="name", nullable = false, columnDefinition = "varchar(255)")
    private String name;

    @Column(name="username", nullable = false, columnDefinition = "varchar(255)")
    private String username;

    @Column(name="password", nullable = false, columnDefinition = "varchar(255)")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
