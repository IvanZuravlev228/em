package com.example.ecomonitoringback.service.impl;

import com.example.ecomonitoringback.model.Pollution;
import com.example.ecomonitoringback.repository.PollutionRepository;
import com.example.ecomonitoringback.service.PollutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutionServiceImpl implements PollutionService {
    private final PollutionRepository pollutionRepository;

    @Override
    public Pollution save(Pollution pollution) {
        return pollutionRepository.save(pollution);
    }

    @Override
    public Pollution getById(Long id) {
        return pollutionRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Can't find by id: " + id));
    }

    @Override
    public List<Pollution> getAll() {
        return pollutionRepository.findAll();
    }

    @Override
    public void saveAll(List<Pollution> pollutions) {
        pollutionRepository.saveAll(pollutions);
    }

    @Override
    public List<Pollution> findPollutionsByCompanyAndYear(Long companyId, Integer year) {
        return pollutionRepository.findPollutionsByCompanyAndYear(companyId, year);
    }

}