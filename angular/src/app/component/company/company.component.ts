import { Component } from '@angular/core';
import {Company} from "../../model/Company";
import {CompanyService} from "../../service/company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css', '../../style/show-button.css']
})
export class CompanyComponent {
  companiesForShow: Company[] = [];
  companies: Company[] = [];
  company: Company = new Company();
  searchCompanyBy: string = "";


  constructor(private companyService: CompanyService) {
  }

  getAllCompanies() {
    this.companyService.getAllCompany().subscribe({
      next: (companies) => {
        this.companies = companies;
        this.companiesForShow = companies;
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

  update(company: Company) {
    this.companyService.update(company.id, company).subscribe({
      next: (updatedTask) => {
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  deleteCompany(id: number) {
    this.companyService.deleteById(id).subscribe({
      next: () => {
        const index = this.companies.findIndex(comp => comp.id === id);
        this.companies.splice(index, 1);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  searchCompany() {
    console.log(this.searchCompanyBy);
    this.companies.forEach(company => {
      console.log(company.name);
      console.log(company.name == this.searchCompanyBy);
    })
    this.companiesForShow = this.companies.filter(company =>
      company.name.toLowerCase().includes(this.searchCompanyBy.toLowerCase())
    );
    console.log(this.companies);
    console.log(this.companiesForShow);
  }
}
