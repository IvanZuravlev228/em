import { Component } from '@angular/core';
import {PollutionService} from "../../service/pollution.service";
import {PollutionForShow} from "../../model/PollutionForShow";

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css', '../../style/show-button.css']
})
export class PollutionComponent {
  pollutionsForShow: PollutionForShow[] = [];

  constructor(private pollutionService: PollutionService) {
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
}
