import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MainComponent } from './component/main/main.component';
import { CompanyComponent } from './component/company/company.component';
import { PollutionComponent } from './component/pollution/pollution.component';
import { PollutantComponent } from './component/pollutant/pollutant.component';
import { RiskComponent } from './component/risk/risk.component';
import { NavigatorComponent } from './component/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CompanyComponent,
    PollutionComponent,
    PollutantComponent,
    RiskComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
