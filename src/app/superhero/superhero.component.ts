import { Component, OnInit } from "@angular/core";
import { Superhero, onDuty } from "../hero.model";
import { superheroes } from "../heroes.data";

@Component({
  selector: "app-superhero",
  template: `
    <div class="component">
      <div class="show-superhero">
        <app-show-superhero
          *ngFor="let item of superheroes"
          [hero]="item"
          (help)="sendHelp($event)"
        ></app-show-superhero>
      </div>
      <div class="right-column">
        <app-table-duty [heroes]="service" [task]="isOnDuty"></app-table-duty>
      </div>
    </div>
  `,
  styleUrls: ["./superhero.component.sass"],
})
export class SuperheroComponent implements OnInit {
  superheroes: Superhero[] = superheroes;
  time: number = Math.floor(Math.random() * 6 * 1000);
  service: { heroe: string; duty: boolean }[] = [];
  isOnDuty = { classTask: false };

  sendHelp(payload: string) {
    // if the hero is in the table of tasks yet the duty propertie is true else we need to add the hero to the table
    this.service.find((e) => e.heroe === payload)
      ? (this.service.find((e) => e.heroe === payload)!.duty = true)
      : this.service.push({ heroe: payload, duty: true });

    this.isOnDuty.classTask = true;

    // Random time dedicated to de task
    let time: number = Math.floor(Math.random() * 6 * 1000);

    setTimeout(() => {
      this.service.find((e) => e.heroe === payload)!.duty = false;
      this.isOnDuty.classTask = false;
    }, time);
  }

  constructor() {}

  ngOnInit(): void {}
}
