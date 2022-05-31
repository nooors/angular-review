import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customFordiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

export function customAllowedNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return !forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
// function customForbiddenNameValidator returns
// a function ValidationFn, that returns an anonimous function that returns Validation errors or null.
