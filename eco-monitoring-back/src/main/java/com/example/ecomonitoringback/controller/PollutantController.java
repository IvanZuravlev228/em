package com.example.ecomonitoringback.controller;

import com.example.ecomonitoringback.model.Pollutant;
import com.example.ecomonitoringback.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pollutant")
public class PollutantController {
    private final PollutantService pollutantService;

    @GetMapping("/{id}")
    public ResponseEntity<Pollutant> getById(@PathVariable Long id) {
        return new ResponseEntity<>(pollutantService.getById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Pollutant>> getAll() {
        return new ResponseEntity<>(pollutantService.getAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> saveAll(@RequestBody List<Pollutant> pollutants) {
        pollutantService.saveAll(pollutants);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}