package com.example.ecomonitoringback.service.impl;

import com.example.ecomonitoringback.model.Pollutant;
import com.example.ecomonitoringback.repository.PollutantRepository;
import com.example.ecomonitoringback.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantServiceImpl implements PollutantService {
    private final PollutantRepository pollutantRepository;

    @Override
    public Pollutant getById(Long id) {
        return pollutantRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Can't find pollutant by id: " + id));
    }

    @Override
    public List<Pollutant> getAll() {
        return pollutantRepository.findAll();
    }

    @Override
    public void saveAll(List<Pollutant> pollutants) {
        pollutantRepository.saveAll(pollutants);
    }

    @Override
    public Pollutant findByName(String name) {
        return pollutantRepository.findByName(name);
    }
}