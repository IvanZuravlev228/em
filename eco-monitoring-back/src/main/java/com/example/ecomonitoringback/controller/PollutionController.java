package com.example.ecomonitoringback.controller;

import com.example.ecomonitoringback.dto.pollution.PollutionRequestDto;
import com.example.ecomonitoringback.dto.pollution.PollutionResponseDto;
import com.example.ecomonitoringback.dto.pollution.PollutionShowResponseDto;
import com.example.ecomonitoringback.service.PollutionService;
import com.example.ecomonitoringback.service.mapper.PollutionMapper;
import com.example.ecomonitoringback.service.mapper.PollutionShowMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pollution")
public class PollutionController {
    private final PollutionService pollutionService;
    private final PollutionMapper pollutionMapper;
    private final PollutionShowMapper pollutionShowMapper;

    @GetMapping("/{id}")
    public ResponseEntity<PollutionResponseDto> getById(@PathVariable Long id) {
        return new ResponseEntity<>(pollutionMapper.toDto(pollutionService.getById(id)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PollutionResponseDto>> getAll() {
        return new ResponseEntity<>(pollutionService.getAll()
                .stream()
                .map(pollutionMapper::toDto)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @GetMapping("/show")
    public ResponseEntity<List<PollutionShowResponseDto>> getAllForShow() {
        return new ResponseEntity<>(pollutionService.getAll()
                .stream()
                .map(pollutionShowMapper::toDto)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<PollutionResponseDto>> findPollutionsByCompanyAndYear(@PathVariable Long companyId,
                                                                                     @RequestParam Integer year) {
        return new ResponseEntity<>(pollutionService.findPollutionsByCompanyAndYear(companyId, year)
                .stream()
                .map(pollutionMapper::toDto)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PollutionShowResponseDto> save(@RequestBody PollutionShowResponseDto dto) {
        return new ResponseEntity<>(pollutionShowMapper.toDto(
                pollutionService.save(pollutionShowMapper.toModel(dto))), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Void> saveAll(@RequestBody List<PollutionRequestDto> pollutions) {
        pollutionService.saveAll(pollutions.stream().map(pollutionMapper::toModel).collect(Collectors.toList()));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}