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
}
