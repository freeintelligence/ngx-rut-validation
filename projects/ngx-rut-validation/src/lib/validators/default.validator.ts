import { ValidatorFn, AbstractControl } from '@angular/forms';
import { validate, format } from 'rut.js';

/**
 * Validate RUT (Reactive Forms)
 */
export function Default(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = format(control.value);

    return validate(value) ? null : { rutdefault: { value: control.value } };
  };
}
