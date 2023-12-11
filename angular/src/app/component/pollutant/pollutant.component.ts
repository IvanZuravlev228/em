import { Component } from '@angular/core';
import {Pollutant} from "../../model/Pollutant";
import {PollutantService} from "../../service/pollutant.service";
import {Company} from "../../model/Company";

@Component({
  selector: 'app-pollutant',
  templateUrl: './pollutant.component.html',
  styleUrls: ['./pollutant.component.css', '../../style/show-button.css']
})
export class PollutantComponent {
  pollutants: Pollutant[] = [];
  pollutant: Pollutant = new Pollutant();

  constructor(private pollutantService: PollutantService) {
  }

  getAllPollutant() {
    this.pollutantService.getAllPollutant().subscribe({
      next: (pollutants) => {
        this.pollutants = pollutants;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  save() {
    this.pollutantService.savePollutant(this.pollutant).subscribe({
      next: (pollutant) => {
        console.log(pollutant);
        this.pollutants.push(pollutant);
        this.pollutant = new Pollutant();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  canAddPollutant(): boolean {
    return this.pollutant.name.length > 0
      && this.pollutant.minMass > 0
      && this.pollutant.maxMass > 0
      && this.pollutant.gdk > 0
      && this.pollutant.dangerClass > 0
      && this.pollutant.rfc > 0
      && this.pollutant.sf > 0;
  }
}
