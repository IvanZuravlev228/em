import { Component } from '@angular/core';
import {Company} from "../../model/Company";
import {CompanyService} from "../../service/company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css', '../../style/show-button.css']
})
export class CompanyComponent {
  companies: Company[] = [];
  company: Company = new Company();

  constructor(private companyService: CompanyService) {
  }

  getAllCompanies() {
    this.companyService.getAllCompany().subscribe({
      next: (companies) => {
        this.companies = companies;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  save() {
    this.companyService.save(this.company).subscribe({
      next: (company) => {
        this.companies.push(company);
        this.company = new Company();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  canAddCompany(): boolean {
    return this.company.name.length > 0
      && this.company.description.length >= 0
      && this.company.ownership.length > 0
      && this.company.address.length > 0;
  }
}
