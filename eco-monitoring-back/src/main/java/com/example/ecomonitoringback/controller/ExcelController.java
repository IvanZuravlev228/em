package com.example.ecomonitoringback.controller;

import com.example.ecomonitoringback.dto.excel.ExcelFile;
import com.example.ecomonitoringback.service.impl.ExcelServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/add-excel")
public class ExcelController {
    private final ExcelServiceImpl excelService;

    @PostMapping
    public ResponseEntity<Void> saveDataFromFile(@RequestBody ExcelFile excelFile) {
        excelService.saveDataFromFile(excelFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}