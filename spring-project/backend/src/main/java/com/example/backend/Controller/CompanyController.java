package com.example.backend.Controller;

import com.example.backend.Models.Company;
import com.example.backend.Models.User;
import com.example.backend.Repositories.ICompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CompanyController{

    @Autowired
    ICompanyRepo iCompanyRepo;

    public CompanyController(ICompanyRepo iCompanyRepo){
        this.iCompanyRepo = iCompanyRepo;
    }

    @GetMapping("/company")
    public List<Company> allCompanies(){
        return iCompanyRepo.findAll();
    }

    @GetMapping("/company/{id}")
    public Optional<Company> companyByID(
            @PathVariable("id") Long id){
        return iCompanyRepo.findById(id);
    }

    @PostMapping("/company")
    public void addCompany(
            @RequestBody Company company){
        iCompanyRepo.save(company);
    }
}