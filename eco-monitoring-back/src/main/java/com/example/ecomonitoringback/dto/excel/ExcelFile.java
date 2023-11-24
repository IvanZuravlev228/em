package com.example.ecomonitoringback.dto.excel;

import com.example.ecomonitoringback.dto.pollution.PollutionRequestDto;
import com.example.ecomonitoringback.model.Company;
import com.example.ecomonitoringback.model.Pollutant;
import lombok.Data;

import java.util.List;

@Data
public class ExcelFile {
    private List<Company> companies;
    private List<Pollutant> pollutants;
    private List<PollutionRequestDto> pollutions;
}