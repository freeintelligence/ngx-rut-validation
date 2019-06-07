import { ValidatorFn, AbstractControl } from '@angular/forms';
import { validate } from 'rut.js';

/**
 * Validate RUT (Reactive Forms)
 */
export function Rut(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return validate(control.value) ? null : { defaultrut: true };
  };
}
