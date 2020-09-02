import { Component, OnInit, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { Agreement } from "../agreement.model"
import { CurrencyFormatterService } from "../currency-formatter.service"

@Component({
  selector: "app-investment-amount",
  templateUrl: "./investment-amount.component.html",
  styleUrls: ["./investment-amount.component.scss"]
})
export class InvestmentAmountComponent implements OnInit {
  @Input() agreements: Record<number, Agreement>
  @Input() form: FormGroup

  constructor(public formatter: CurrencyFormatterService) {}

  ngOnInit(): void {}

  get selectedAgreement() {
    return this.agreements[this.form.value.agreement]
  }

  get agreementOptions() {
    return Object.entries(this.agreements).map(([value, { label, price }]) => {
      return {
        value,
        label: `${label} - ${this.formatter.format(price)}`
      }
    })
  }
}
