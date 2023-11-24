import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pollutant} from "../model/Pollutant";
import {environment} from "../../environment/environment";

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
}
