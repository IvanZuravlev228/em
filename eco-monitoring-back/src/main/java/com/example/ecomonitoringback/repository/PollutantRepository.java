package com.example.ecomonitoringback.repository;

import com.example.ecomonitoringback.model.Pollutant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollutantRepository extends JpaRepository<Pollutant, Long> {
    Pollutant findByName(String name);
}