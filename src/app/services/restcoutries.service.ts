import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RESTCoutriesService {
  BASEURI = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  getCountry(countryName: string): Observable<any> {
    return this.http.get(`${this.BASEURI}/name/${countryName}`);
  }
}
