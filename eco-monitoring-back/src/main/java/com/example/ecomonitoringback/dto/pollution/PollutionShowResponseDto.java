package com.example.ecomonitoringback.dto.pollution;

import lombok.Data;

@Data
public class PollutionShowResponseDto {
    private Long id;
    private String companyName;
    private String pollutantName;
    private Double valuePollution;
    private Double concentration;
    private Integer year;
}