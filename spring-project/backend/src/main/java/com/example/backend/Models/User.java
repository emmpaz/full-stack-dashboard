package com.example.backend.Models;

import org.hibernate.annotations.Cache;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name="first", nullable = false, columnDefinition = "varchar(255)")
    private String firstname;

    @Column(name="last", nullable = false, columnDefinition = "varchar(255)")
    private String lastname;

    @Column(name="username", nullable = false, columnDefinition = "varchar(255)")
    private String username;

    @Column(name="password", nullable = false, columnDefinition = "varchar(255)")
    private String password;
/* 
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "users",
        joinColumns = { @JoinColumn(name = "id") },
        inverseJoinColumns = { @JoinColumn(name = "manager_id") }
    )*/

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

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
