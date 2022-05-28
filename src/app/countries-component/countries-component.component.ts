import { Component, OnInit } from "@angular/core";
import { RESTCoutriesService } from "../services/restcoutries.service";

@Component({
  selector: "app-countries-component",
  template: `
    <div class="countries">
      <h2 class="title">Countries</h2>
    </div>
    <div class="data">
      <form class="country">
        <label for="country">Search for a capital</label>
        <input
          type="text"
          name="country"
          [(ngModel)]="countryName"
          placeholder="country"
        />
        <button type="button" (click)="showCapital()">Search</button>
      </form>
      <div class="capital">{{ capital }}</div>
    </div>
  `,
  styleUrls: ["./countries-component.component.sass"],
})
export class CountriesComponentComponent implements OnInit {
  countryName = "";
  capital = "";
  constructor(private countriesServices: RESTCoutriesService) {}

  showCapital() {
    this.countriesServices
      .getCountry(this.countryName)
      .subscribe((data: any[]) => (this.capital = data[0].capital));
  }

  ngOnInit(): void {}
}
