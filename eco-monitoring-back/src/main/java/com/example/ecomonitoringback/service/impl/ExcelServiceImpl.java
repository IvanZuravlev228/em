package com.example.ecomonitoringback.service.impl;

import com.example.ecomonitoringback.dto.excel.ExcelFile;
import com.example.ecomonitoringback.service.CompanyService;
import com.example.ecomonitoringback.service.PollutantService;
import com.example.ecomonitoringback.service.PollutionService;
import com.example.ecomonitoringback.service.mapper.PollutionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ExcelServiceImpl {
    private final CompanyService companyService;
    private final PollutantService pollutantService;
    private final PollutionService pollutionService;
    private final PollutionMapper pollutionMapper;

    public void saveDataFromFile(ExcelFile excelFile) {
        companyService.saveAll(excelFile.getCompanies());
        pollutantService.saveAll(excelFile.getPollutants());
        pollutionService.saveAll(excelFile.getPollutions()
                .stream()
                .map(pollutionMapper::toModel)
                .collect(Collectors.toList()));
    }
}