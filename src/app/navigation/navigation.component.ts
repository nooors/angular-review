import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  template: `
    <nav class="navigate">
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li>
          <a routerLink="/superhero" routerLinkActive="active">Superhero</a>
        </li>
        <li><a routerLink="/dice" routerLinkActive="active">Dice</a></li>
        <li><a routerLink="/phrase" routerLinkActive="active">Sentence</a></li>
        <li><a routerLink="/country" routerLinkActive="active">Country</a></li>
        <li>
          <a routerLink="/form-example" routerLinkActive="active"
            >FormExample</a
          >
        </li>
        <li>
          <a routerLink="/form-exercise" routerLinkActive="active"
            >FormExercise</a
          >
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ["./navigation.component.sass"],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
