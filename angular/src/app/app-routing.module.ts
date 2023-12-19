import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./component/main/main.component";
import {RiskComponent} from "./component/risk/risk.component";
import {TaxComponent} from "./component/tax/tax.component";
import {FineComponent} from "./component/fine/fine.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'risk', component: RiskComponent},
  {path: 'tax', component: TaxComponent},
  {path: 'fine', component: FineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
