import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { customAllowedNameValidator } from "../example-reactive-form/custom-forbidden-name.validator";
import { createDate } from "../utilities/utilities";

@Component({
  selector: "app-form-exercici",
  template: `
    <h2>Reactive forms exercici</h2>
    <div class="form">
      <form [formGroup]="formExercici">
        <div class="input-group">
          <label for="Name">Name </label>
          <input type="text" name="Name" id="Name" formControlName="name" />
        </div>
        <div class="input-group">
          <label for="Email">Email </label>
          <input type="email" name="Email" id="Email" formControlName="email" />
        </div>
        <div class="input-group">
          <label for="BirthDate">Birth Date </label>
          <input
            type="text"
            name="BirthDate"
            id="BirthDate"
            formControlName="birthDate"
            placeholder="dd/mm/yyyy"
          />
        </div>
        <div class="input-group">
          <label for="Age">Age </label>
          <input type="text" name="Age" id="Age" formControlName="age" />
        </div>
        <div class="input-group">
          <label for="DniExpiry">DNI Expiry Date</label>
          <input
            type="text"
            name="DniExpiry"
            id="DniExpiry"
            formControlName="dniExpiry"
            placeholder="dd/mm/yyyy"
          />
        </div>
      </form>
      <div class="display">
        <p>{{ formExercici.get("name")?.value }}</p>
        <p>{{ formExercici.get("name")?.errors | json }}</p>
        <p>{{ formExercici.get("email")?.value }}</p>
        <p>{{ formExercici.get("email")?.errors | json }}</p>
        <p>{{ formExercici.get("birthDate")?.value }}</p>
        <p>{{ formExercici.get("birthDate")?.errors | json }}</p>
      </div>
    </div>
  `,
  styleUrls: ["./form-exercici.component.sass"],
})
export class FormExerciciComponent implements OnInit {
  formExercici: FormGroup = this.formDeploy.group({
    name: [
      "",
      [Validators.required, customAllowedNameValidator(/^[A-Za-z]+$/)],
    ],
    email: ["", [customAllowedNameValidator(/[.*][@caser.com]/)]],
    birthDate: [""],
    age: [""],
    dniExpiry: [""],
  });

  constructor(private formDeploy: FormBuilder) {}

  ngOnInit(): void {}
}
