import { ValidatorFn, AbstractControl } from '@angular/forms';
import { validate, format } from 'rut.js';

/**
 * Validate RUT (Reactive Forms)
 */
export function Default(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = format(control.value);

    return validate(value) && value.length > 6 ? null : { rutdefault: { value: control.value } };
  };
}
