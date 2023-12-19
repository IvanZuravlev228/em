package com.example.ecomonitoringback.service.mapper;

import com.example.ecomonitoringback.dto.pollution.PollutionShowResponseDto;
import com.example.ecomonitoringback.model.Pollution;
import com.example.ecomonitoringback.service.CompanyService;
import com.example.ecomonitoringback.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class PollutionShowMapper {
    private final PollutantService pollutantService;
    private final CompanyService companyService;

    public PollutionShowResponseDto toDto(Pollution pollution) {
        PollutionShowResponseDto dto = new PollutionShowResponseDto();
        dto.setId(pollution.getId());
        dto.setPollutantName(pollution.getPollutant().getName());
        dto.setCompanyName(pollution.getCompany().getName());
        dto.setValuePollution(pollution.getValuePollution());
        dto.setConcentration(pollution.getConcentration());
        dto.setYear(pollution.getYear());
        dto.setOrgans(pollution.getPollutant().getOrgans());
        return dto;
    }

    public Pollution toModel(PollutionShowResponseDto dto) {
        Pollution model = new Pollution();
        model.setPollutant(pollutantService.findByName(dto.getPollutantName()));
        model.setCompany(companyService.findByName(dto.getCompanyName()));
        model.setValuePollution(dto.getValuePollution());
        model.setConcentration(dto.getConcentration());
        model.setYear(dto.getYear());
        return model;
    }
}