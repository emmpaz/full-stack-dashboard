package com.example.backend.Models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "companyid", nullable = false)
    private Long companyid;

    @Column(name = "company_name", nullable = false, columnDefinition = "varchar(255)")
    private String companyName;
/* 
    @OneToMany(mappedBy = "company")
    private Set<Company> companies = new HashSet<>();*/

    public Long getId() {
        return companyid;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setId(Long id) {
        this.companyid = id;
    }

    public void setCompanyName(String name) {
        this.companyName = name;
    }
}
