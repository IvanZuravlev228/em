package com.example.ecomonitoringback.repository;

import com.example.ecomonitoringback.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Company findByName(String name);
}