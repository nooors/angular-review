import { Component, OnInit } from "@angular/core";
import { RESTCoutriesService } from "../services/restcoutries.service";
import { map } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";

@Component({
  selector: "app-countries-component",
  template: `
    <div class="countries">
      <h2 class="title">Countries</h2>
    </div>
    <div class="data">
      <!-- Refactor -->
      <!-- #country is a template reference vealue -->
      <input #country /><br />
      <button (click)="showCapital(country.value)">Find the Capital</button>
      <!-- <form class="country">
        <label for="country">Search for a capital</label>
        <input
          type="text"
          name="country"
          [(ngModel)]="countryName"
          placeholder="country"
        />
        <button type="button" (click)="showCapital()">Search</button>
      </form> -->

      <!-- async pipes works with promises observables and handles susbscription/unsubscription -->
      <!-- <div class="capital">{{ capital }}</div> -->
      <div class="capital">{{ capital$ | async }}</div>
      <!-- Best practice |^ -->
    </div>
  `,
  styleUrls: ["./countries-component.component.sass"],
})
export class CountriesComponentComponent implements OnInit {
  // countryName = "";

  // Refactor using async pipe
  // capital = "";
  capital$: Observable<string> = EMPTY;
  constructor(private countriesServices: RESTCoutriesService) {}

  // showCapital() {
  //   this.countriesServices
  //     .getCountry(this.countryName)
  //     .subscribe((data: any[]) => (this.capital = data[0].capital));
  // }

  // Refactor
  // showCapital(countryName: string) {
  //   this.countriesServices
  //     .getCountry(countryName)
  //     .subscribe((data: any[]) => (this.capital = data[0].capital));
  // }

  // Refactor using map
  // showCapital(countryName: string) {
  //   this.countriesServices
  //     .getCountry(countryName)
  //     .pipe(map((data) => data[0].capital))
  //     .subscribe((capital) => (this.capital = capital));
  // }

  // Refactor using async pipe
  showCapital(countryName: string) {
    this.capital$ = this.countriesServices
      .getCountry(countryName)
      .pipe(map((data) => data[0].capital));
  }

  ngOnInit(): void {}
}
