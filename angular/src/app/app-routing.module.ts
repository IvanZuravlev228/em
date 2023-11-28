import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./component/main/main.component";
import {RiskComponent} from "./component/risk/risk.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'risk', component: RiskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
