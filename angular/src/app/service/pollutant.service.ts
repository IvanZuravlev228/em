import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pollutant} from "../model/Pollutant";
import {environment} from "../../environment/environment";
import {PollutionForShow} from "../model/PollutionForShow";
import {Pollution} from "../model/Pollution";

@Injectable({
  providedIn: 'root'
})
export class PollutantService {

  constructor(private http: HttpClient) { }

  getAllPollutant() {
    return this.http.get<Pollutant[]>(environment.backendURL + "/pollutant", {
      headers: {

      }});
  }

  getPollutantById(id: number) {
    return this.http.get<Pollutant>(environment.backendURL + "/pollutant/" + id, {
      headers: {

      }});
  }

  savePollutant(pollutant: Pollutant) {
    const body = JSON.stringify(pollutant);
    return this.http.post<Pollutant>(environment.backendURL + "/pollutant", body, {
      headers: {
        "Content-Type": "application/json"
      }});
  }

  getById(id: number) {
    return this.http.get<Pollutant>(environment.backendURL + "/pollutant/" + id, {
      headers: {

      }});
  }
}
