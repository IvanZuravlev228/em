package com.example.ecomonitoringback.service;

import com.example.ecomonitoringback.model.Pollutant;

import java.util.List;

public interface PollutantService {
    Pollutant getById(Long id);

    List<Pollutant> getAll();

    void saveAll(List<Pollutant> pollutants);

    Pollutant findByName(String name);
}