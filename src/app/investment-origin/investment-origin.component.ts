import { Component, OnInit, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"

@Component({
  selector: "app-investment-origin",
  templateUrl: "./investment-origin.component.html",
  styleUrls: ["./investment-origin.component.scss"]
})
export class InvestmentOriginComponent implements OnInit {
  @Input() form: FormGroup
  hasExtras = false

  constructor() {}

  ngOnInit(): void {}

  handleExtrasChange(event: CustomEvent) {
    this.hasExtras = event.detail.checked

    if (!event.detail.checked) {
      this.form.get("extras").setValue(null)
    }
  }
}
