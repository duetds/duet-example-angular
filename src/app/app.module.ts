import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { DuetComponents } from "@duetds/angular"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { IndexPageComponent } from "./index-page/index-page.component"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { InvestmentAmountComponent } from './investment-amount/investment-amount.component';
import { InvestmentOriginComponent } from './investment-origin/investment-origin.component';
import { SummaryComponent } from './summary/summary.component'

@NgModule({
  declarations: [AppComponent, IndexPageComponent, HeaderComponent, FooterComponent, InvestmentAmountComponent, InvestmentOriginComponent, SummaryComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, DuetComponents, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
