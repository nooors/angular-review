import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { customFordiddenNameValidator } from "./custom-forbidden-name.validator";

@Component({
  selector: "app-example-reactive-form",
  template: `
    <p>example-reactive-form</p>
    <form [formGroup]="formExample">
      <label for="Name">Name</label>
      <input type="text" id="Name" name="Name" formControlName="name" />
      <label for="Age">Age</label>
      <input type="text" id="Age" name="Age" formControlName="age" />
      <label for="Email">Name</label>
      <input type="text" id="Email" name="Email" formControlName="email" />
    </form>

    <!-- Accesing form values and validity -->
    <p>{{ formExample.value | json }}</p>
    <p>Valid: {{ formExample.valid | json }}</p>
    <p>{{ formExample.get("name")?.errors | json }}</p>
  `,
  styleUrls: ["./example-reactive-form.component.sass"],
})
export class ExampleReactiveFormComponent implements OnInit {
  name: string = "John Doe";
  maxLength: number = 10;

  constructor(private _formBuilder: FormBuilder) {}

  // formExample: FormGroup = this._formBuilder.group({
  //   name: [],
  //   age: [],
  //   email: [],
  // });

  // Default values // Example angular built-in Validators
  formExample: FormGroup = this._formBuilder.group({
    name: [
      this.name,
      [
        Validators.required,
        Validators.maxLength(this.maxLength),
        customFordiddenNameValidator(/bob/i),
      ],
    ],
    age: ["33"],
    email: ["johndoe@email.com"],
  });

  ngOnInit(): void {}
}
