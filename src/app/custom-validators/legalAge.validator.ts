import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { calculateAge, createDate } from "../utilities/utilities";

const defaultLegalAge = 18;

export function legalAgeValidator(legalAge = defaultLegalAge): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let hasLegalAge = false;

    if (control.value) {
      hasLegalAge = calculateAge(createDate(control.value)) >= legalAge;
    }

    return hasLegalAge ? null : { nonLegalAge: { birthdate: control.value } };
  };
}
