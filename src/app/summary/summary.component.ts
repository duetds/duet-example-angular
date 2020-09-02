import { Component, OnInit, Input } from "@angular/core"
import { Agreement } from "../agreement.model"
import { CurrencyFormatterService } from "../currency-formatter.service"

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  @Input() agreement: Agreement

  constructor(public formatter: CurrencyFormatterService) {}

  ngOnInit(): void {}
}
