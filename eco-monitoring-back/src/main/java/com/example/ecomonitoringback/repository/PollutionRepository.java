package com.example.ecomonitoringback.repository;

import com.example.ecomonitoringback.model.Pollution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PollutionRepository extends JpaRepository<Pollution, Long> {
    @Query("SELECT p FROM Pollution p JOIN p.pollutant pt " +
            "WHERE p.company.id = :companyId AND p.year = :year")
    List<Pollution> findPollutionsByCompanyAndYear(
            @Param("companyId") Long companyId,
            @Param("year") Integer year
    );
}