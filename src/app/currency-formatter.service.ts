import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class CurrencyFormatterService {
  private formatter = new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" })

  format(value: number) {
    return this.formatter.format(value)
  }
}
