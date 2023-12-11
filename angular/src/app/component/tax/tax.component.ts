import { Component } from '@angular/core';
import {TaxResult} from "../../model/TaxResult";
import {CompanyService} from "../../service/company.service";
import {PollutionService} from "../../service/pollution.service";
import {PollutantService} from "../../service/pollutant.service";
import {Pollution} from "../../model/Pollution";

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent {
  taxResults: TaxResult[] = [];
  private minSalary: number = 6700;
  private populationSizeCoefficient: number = 1.55;
  private typeOfSettlementCoefficient: number = 1.25;
  private Kt: number = this.populationSizeCoefficient * this.typeOfSettlementCoefficient;
  private Kzi: number = 1;

  constructor(private companyService: CompanyService,
              private pollutionService: PollutionService,
              private pollutantService: PollutantService) {
  }

  ngOnInit(): void {
    this.getAllPollution();
  }

  getAllPollution() {
    this.pollutionService.getAllPollution().subscribe({
      next: (pollutions) => {
        this.calcTax(pollutions);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  calcTax(mainPollutions: Pollution[]) {
    mainPollutions.forEach(pollution => {
      this.companyService.getById(pollution.companyId).subscribe({
        next: (company) => {
          this.pollutantService.getPollutantById(pollution.pollutantId).subscribe({
            next: (pollutant) => {
              let avgPoll = pollution.valuePollution;
              let timeH = Math.floor(Math.random() * 365) + 1;
              let m = 3.6 * Math.pow(10, -3) * (avgPoll - pollutant.gdk) * timeH;
              const taxResult: TaxResult = {
                companyName: company.name,
                valuePollution: pollution.valuePollution,
                pollutantName: pollutant.name,
                avgPollution: avgPoll,
                normPollution: pollutant.gdk,
                timeH:timeH,
                taxCoefficient: m,
                tax: m * 1.1 * this.minSalary * (pollutant.gdk > 1 ? 10 / pollutant.gdk : 1 / pollutant.gdk) * this.Kt * this.Kzi
              }
              this.taxResults.push(taxResult);
            },
            error: (error) => {
              console.log("get pollutant by id error");
              console.log(error);
            }
          })
        },
        error: (error) => {
          console.log("get company by id error");
          console.log(error);
        }
      })
    });
  }

  sortTaxResultsByTax() {
    this.taxResults = this.taxResults.sort((a, b) => b.tax - a.tax);
  }
}
