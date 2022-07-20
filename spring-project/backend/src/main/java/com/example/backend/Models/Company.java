package com.example.backend.Models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="comp_seq_gen")
    @SequenceGenerator(name="comp_seq_gen", sequenceName="MY_COM_SEQ")
    @Column(name = "companyid")
    private Long companyid;

    @Column(name = "company_name", columnDefinition = "varchar(255)")
    private String company_name;
/* 
    @OneToMany(mappedBy = "company")
    private Set<Company> companies = new HashSet<>();*/

    public Long getId() {
        return companyid;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setId(Long id) {
        this.companyid = id;
    }

    public void setCompany_name(String name) {
        this.company_name = name;
    }
}
