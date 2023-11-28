import {Component, OnInit} from '@angular/core';
import {PollutionService} from "../../service/pollution.service";
import {PollutionForShow} from "../../model/PollutionForShow";
import {Company} from "../../model/Company";
import {CompanyService} from "../../service/company.service";
import {PollutantService} from "../../service/pollutant.service";
import {Pollutant} from "../../model/Pollutant";

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css', '../../style/show-button.css']
})
export class PollutionComponent implements OnInit{
  pollutionsForShow: PollutionForShow[] = [];
  pollutionForSave: PollutionForShow = new PollutionForShow();
  companies: Company[] = [];
  pollutants: Pollutant[] = [];

  constructor(private pollutionService: PollutionService,
              private companiesService: CompanyService,
              private pollutantService: PollutantService) {
  }

  ngOnInit(): void {
    this.getAllCompanies();
    this.getAllPollutants();
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

  getAllPollutionForShow() {
    this.pollutionService.getAllPollutionForShow().subscribe({
      next: (pollutions) => {
        this.pollutionsForShow = pollutions;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getAllPollutants() {
    this.pollutantService.getAllPollutant().subscribe({
      next: (poll) => {
        this.pollutants = poll;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  save() {
    this.pollutionService.savePollution(this.pollutionForSave).subscribe({
      next: (pollution) => {
        this.pollutionsForShow.push(pollution);
        this.pollutionForSave = new PollutionForShow();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  canAddPollution(): boolean {
    return this.pollutionForSave.companyName.length > 0
      && this.pollutionForSave.year >= 2000
      && this.pollutionForSave.concentration > 0
      && this.pollutionForSave.pollutantName.length > 0
      && this.pollutionForSave.valuePollution > 0;
  }
}
