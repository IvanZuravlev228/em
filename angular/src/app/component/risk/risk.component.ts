import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/Company";
import {PollutionAndPollutant} from "../../model/PollutionAndPollutant";
import {CompanyService} from "../../service/company.service";
import {PollutionService} from "../../service/pollution.service";
import {PollutantService} from "../../service/pollutant.service";

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit{
  private standard_value_of_human_body_weight: number = 70;
  private daily_air_consumption: number = 20;

  years: number[] = [2016, 2017, 2018, 2019, 2020, 2021];
  companies: Company[] = [];
  companyIdForSearch: number = -1;
  companyYearForSearch: number = -1;
  pollutionAndPollutant: PollutionAndPollutant[] = [];


  constructor(private companiesService: CompanyService,
              private pollutionService: PollutionService,
              private pollutantService: PollutantService) {
  }

  ngOnInit() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companiesService.getAllCompany().subscribe({
      next: (companies) => {
        this.companies = companies;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  showInformation() {
    this.pollutionAndPollutant.splice(0);
    this.pollutionService.getPollutionsByCompanyIdAndYear(this.companyIdForSearch, this.companyYearForSearch).subscribe({
      next: (pollutions) => {
        for (const pollution of pollutions) {
            this.pollutantService.getPollutantById(pollution.pollutantId).subscribe({
              next: (pollutant) => {
                const pollutionAndPollutant: PollutionAndPollutant = {
                  pollution: pollution,
                  pollutant: pollutant,
                  hq: pollution.concentration / pollutant.rfc,
                  ur: Math.pow(pollutant.sf, -1) / (this.standard_value_of_human_body_weight * this.daily_air_consumption),
                  risk: this.getRisk(Math.pow(pollutant.sf, -1) / (this.standard_value_of_human_body_weight * this.daily_air_consumption))
                }
                this.pollutionAndPollutant.push(pollutionAndPollutant);
              },
              error: (error) => {
                console.log(error);
              }
            })
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getRisk(ur: number):string {
    if (ur > Math.pow(10, -3)) {
      return "Високий";
    }
    if (ur >= Math.pow(10, -3) && ur <= Math.pow(10, -4)) {
      return "Середній";
    }
    if (ur > Math.pow(10, -4) && ur <= Math.pow(10, -6)) {
      return "Низький";
    }
    return "Мінімальний";
  }
}
