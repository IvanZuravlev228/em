import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/Company";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCompany() {
    return this.http.get<Company[]>(environment.backendURL + "/companies", {
      headers: {

      }});
  }

  save(company: Company) {
    const body = JSON.stringify(company);
    return this.http.post<Company>(environment.backendURL + "/companies", body, {
      headers: {
        "Content-Type": "application/json"
      }});
  }

  getById(id: number) {
    return this.http.get<Company>(environment.backendURL + "/companies/" + id, {
      headers: {

      }});
  }
}
