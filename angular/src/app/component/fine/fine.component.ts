import { Component } from '@angular/core';
import {FineResult} from "../../model/FIneResult";
import {PollutantService} from "../../service/pollutant.service";
import {PollutionService} from "../../service/pollution.service";
import {CompanyService} from "../../service/company.service";
import {Pollution} from "../../model/Pollution";

@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrls: ['./fine.component.css']
})
export class FineComponent {
  years: string[] = ["all", "2016", "2017", "2018", "2019", "2020", "2021"];
  companyYearForSearch: string = "all";
  fineResultsForShow: FineResult[] = [];
  fineResults: FineResult[] = [];

  constructor(private companyService: CompanyService,
              private pollutantService: PollutantService,
              private pollutionService: PollutionService) {
  }

  ngOnInit(): void {
    this.getAllPollution();
    this.search();
  }

  search() {
    this.fineResultsForShow = [];
    if (this.companyYearForSearch === "all") {
      this.fineResultsForShow = this.fineResults;
    }
    if (this.companyYearForSearch === "2016") {
      this.fineResultsForShow = this.fineResults
        .filter(item => item.year === "2016")
        .sort((a, b) => a.companyName.localeCompare(b.companyName));
    }
    if (this.companyYearForSearch === "2017") {
      this.fineResultsForShow = this.fineResults
        .filter(item => item.year === "2017")
        .sort((a, b) => a.companyName.localeCompare(b.companyName));
    }
    if (this.companyYearForSearch === "2018") {
      this.fineResultsForShow = this.fineResults
        .filter(item => item.year === "2018")
        .sort((a, b) => a.companyName.localeCompare(b.companyName));
    }
    if (this.companyYearForSearch === "2019") {
      this.fineResultsForShow = this.fineResults
        .filter(item => item.year === "2019")
        .sort((a, b) => a.companyName.localeCompare(b.companyName));
    }
    if (this.companyYearForSearch === "2020") {
      this.fineResultsForShow = this.fineResults
        .filter(item => item.year === "2020")
        .sort((a, b) => a.companyName.localeCompare(b.companyName));
    }
    if (this.companyYearForSearch === "2021") {
      this.fineResultsForShow = this.fineResults
        .filter(item => item.year === "2021")
        .sort((a, b) => a.companyName.localeCompare(b.companyName));
    }
  }

  getAllPollution() {
    this.pollutionService.getAllPollution().subscribe({
      next: (pollutions) => {
        this.calcFine(pollutions);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  calcFine(pollutions: Pollution[]) {
    pollutions.forEach(pollution => {
      this.companyService.getById(pollution.companyId).subscribe({
        next: (company) => {
          this.pollutantService.getById(pollution.pollutantId).subscribe({
            next: (pollutant) => {
              const fineResult: FineResult = {
                companyName: company.name,
                pollutionName: pollutant.name,
                pollutionValue: pollution.valuePollution,
                taxForStationarySources: pollution.valuePollution * pollutant.taxRatesByStationarySources,
                taxForDischargesToWaterBodies: pollution.valuePollution * pollutant.taxRatesForDischargesToWaterBodies,
                taxForWasteDisposal: pollution.valuePollution * pollutant.taxRatesForWasteDisposal,
                taxForTheGenerationOfRadioactiveWaste: pollutant.taxRatesForTheGenerationOfRadioactiveWaste,
                taxForTemporaryStorageOfRadioactiveWaste: pollution.valuePollution * pollutant.taxRatesForTemporaryStorageOfRadioactiveWaste,
                year: pollution.year.toString()
              }
              this.fineResults.push(fineResult);
            },
            error: (error) => {
              console.log("error get pollutant by id");
              console.log(error);
            }
          })
        },
        error: (error) => {
          console.log("error get company be id");
          console.log(error);
        }
      })
    })
  }

  sort1() {
    this.fineResultsForShow = this.fineResultsForShow.sort((a, b) => b.taxForStationarySources - a.taxForStationarySources);
  }

  sort2() {
    this.fineResultsForShow = this.fineResultsForShow.sort((a, b) => b.taxForDischargesToWaterBodies - a.taxForDischargesToWaterBodies);
  }

  sort3() {
    this.fineResultsForShow = this.fineResultsForShow.sort((a, b) => b.taxForWasteDisposal - a.taxForWasteDisposal);
  }

  sort4() {
    this.fineResultsForShow = this.fineResultsForShow.sort((a, b) => b.taxForTheGenerationOfRadioactiveWaste - a.taxForTheGenerationOfRadioactiveWaste);
  }

  sort5() {
    this.fineResultsForShow = this.fineResultsForShow.sort((a, b) => b.taxForTemporaryStorageOfRadioactiveWaste - a.taxForTemporaryStorageOfRadioactiveWaste);
  }
}
