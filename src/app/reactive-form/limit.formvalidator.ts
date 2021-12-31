import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function LimitValidator(limit: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var controlVal = Number(control.value);

    if (controlVal > limit) {
      return { limit: { maximumValue: limit } };
    }
    return null;
  }
}
