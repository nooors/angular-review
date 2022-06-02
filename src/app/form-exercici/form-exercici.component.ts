import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { customAllowedNameValidator } from "../example-reactive-form/custom-forbidden-name.validator";
import { calculateAge, createDate } from "../utilities/utilities";
import { validDNIValidator } from "../custom-validators/validDNI.validator";
import { legalAgeValidator } from "../custom-validators/legalAge.validator";
import { isCandidateForPermanentDNI } from "../utilities/utilities";

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
          <label *ngIf="!isCandidateForPermanentDNI" for="DNIExpiryDate "
            >DNI Expiry Date</label
          >
          <input
            *ngIf="!isCandidateForPermanentDNI"
            id="DNIExpiryDate"
            name="DNIExpiryDate"
            formControlName="dniExpiry"
          />
        </div>
        <div class="input-group">
          <label *ngIf="isCandidateForPermanentDNI" for="PermanentDNI "
            >Permanent DNI</label
          >
          <input
            *ngIf="isCandidateForPermanentDNI"
            type="checkbox"
            id="PermanentDNI"
            name="PermanentDNI"
            formControlName="permanentdni"
          />
        </div>
        <fieldset formGroupName="address">
          <div class="input-group">
            <label for="Street">Street</label>
            <input id="Street" name="Street" formControlName="street" />
          </div>

          <div class="input-group">
            <label for="City">City</label>
            <input id="City" name="City" formControlName="city" />
          </div>

          <div class="input-group">
            <label for="Postalcode">Postal Code</label>
            <input
              id="Postalcode"
              name="Postalcode"
              formControlName="postalcode"
            />
          </div>
        </fieldset>
        <div>
          <button [disabled]="formExercici.invalid" (click)="log()">
            Submit
          </button>
          <button (click)="clear()">Clear</button>
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
  constructor(private formDeploy: FormBuilder) {}

  isCandidateForPermanentDNI = false;

  formExercici!: FormGroup;
  formAddress!: FormGroup;

  ngOnInit(): void {
    // form
    this.formExercici = this.formDeploy.group({
      name: [
        "",
        [Validators.required, customAllowedNameValidator(/^[A-Za-z ]*$/)],
      ],
      email: ["", [Validators.pattern(/@caser.com$/)]],
      age: [],
      dniExpiry: [, validDNIValidator()],
      birthDate: [, legalAgeValidator()],
      address: this._addressFormBuilder(),
    });
    // age logic
    const ageControl = this.formExercici.get("age");
    ageControl?.disable();
    this.formExercici
      .get("birthDate")
      ?.valueChanges.subscribe((birthDateSring) => {
        const birthDate = createDate(birthDateSring);
        ageControl?.setValue(calculateAge(birthDate));

        // permanent DNI logic
        if (isCandidateForPermanentDNI(birthDate)) {
          this.formExercici.removeControl("dn");
        }
      });
  }

  private _addressFormBuilder(): FormGroup {
    return (this.formAddress = this.formDeploy.group({
      street: [],
      city: [],
      postalcode: [],
    }));
  }
  clear() {
    this.formExercici.reset();
  }

  log() {
    console.log(this.formExercici.value);
  }
}
// note: Validators.pattern takes a string or a regex
