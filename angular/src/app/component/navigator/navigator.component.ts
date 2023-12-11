import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
  constructor(private router: Router) {
  }

  toMain() {
    this.router.navigate(['/main']);
  }

  toRisk() {
    this.router.navigate(['/risk']);
  }

  toTax() {
    this.router.navigate(['/tax']);
  }
}
