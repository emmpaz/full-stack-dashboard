package com.example.backend.Repositories;

import com.example.backend.Models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICompanyRepo extends JpaRepository<Company, Long> {

}
