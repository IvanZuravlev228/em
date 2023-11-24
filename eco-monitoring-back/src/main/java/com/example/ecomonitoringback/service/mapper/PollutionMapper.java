package com.example.ecomonitoringback.service.mapper;

import com.example.ecomonitoringback.dto.pollution.PollutionRequestDto;
import com.example.ecomonitoringback.dto.pollution.PollutionResponseDto;
import com.example.ecomonitoringback.model.Pollution;
import com.example.ecomonitoringback.service.CompanyService;
import com.example.ecomonitoringback.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class PollutionMapper {
    private final PollutantService pollutantService;
    private final CompanyService companyService;

    public PollutionResponseDto toDto(Pollution pollution) {
        PollutionResponseDto dto = new PollutionResponseDto();
        dto.setId(pollution.getId());
        dto.setPollutantId(pollution.getPollutant().getId());
        dto.setCompanyId(pollution.getCompany().getId());
        dto.setValuePollution(pollution.getValuePollution());
        dto.setConcentration(pollution.getConcentration());
        dto.setYear(pollution.getYear());
        return dto;
    }

    public Pollution toModel(PollutionRequestDto dto) {
        Pollution model = new Pollution();
        model.setPollutant(pollutantService.getById(dto.getPollutantId()));
        model.setCompany(companyService.getById(dto.getCompanyId()));
        model.setValuePollution(dto.getValuePollution());
        model.setConcentration(dto.getConcentration());
        model.setYear(dto.getYear());
        return model;
    }
}