package com.example.ecomonitoringback.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "pollutions")
public class Pollution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Company company;
    @ManyToOne
    private Pollutant pollutant;
    private Double valuePollution;
    private Integer year;
    private Double concentration;
}
