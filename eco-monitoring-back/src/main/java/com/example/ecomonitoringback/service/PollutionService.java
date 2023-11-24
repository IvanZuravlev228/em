package com.example.ecomonitoringback.service;

import com.example.ecomonitoringback.model.Pollution;

import java.util.List;

public interface PollutionService {
    Pollution save(Pollution pollution);

    Pollution getById(Long id);

    List<Pollution> getAll();

    void saveAll(List<Pollution> pollutions);

    List<Pollution> findPollutionsByCompanyAndYear(Long companyId, Integer year);
}