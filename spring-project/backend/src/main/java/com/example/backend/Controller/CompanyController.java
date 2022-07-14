package com.example.backend.Controller;

import com.example.backend.Models.Company;
import com.example.backend.Models.User;
import com.example.backend.Repositories.ICompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Company companyByID(
            @PathVariable("id") String id){
        return iCompanyRepo.getReferenceById(Long.valueOf(id));
    }

    @PostMapping("/company")
    public void addCompany(
            @RequestBody Company company){
        iCompanyRepo.save(company);
    }
}