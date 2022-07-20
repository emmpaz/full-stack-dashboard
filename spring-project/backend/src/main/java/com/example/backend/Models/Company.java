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
    @Column(name = "companyId")
    private Long companyId;

    @Column(name = "companyName", columnDefinition = "varchar(255)")
    private String companyName;
/* 
    @OneToMany(mappedBy = "company")
    private Set<Company> companies = new HashSet<>();*/

    public Long getId() {
        return companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setId(Long id) {
        this.companyId = id;
    }

    public void setCompanyName(String name) {
        this.companyName = name;
    }
}
