import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { createDate } from "../utilities/utilities";

export function validDNIValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validDNI = false;
    if (control.value) {
      validDNI = createDate(control.value) > new Date();
    }
    return validDNI ? null : { nonValidDNI: { expirationDate: control.value } };
  };
}
