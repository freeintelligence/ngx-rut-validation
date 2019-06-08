import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import { RutValidators } from '../validations';

@Directive({
  selector: '[rutDefault]',
  providers: [ { provide: NG_VALIDATORS, useExisting: DefaultDirective, multi: true } ],
})
export class DefaultDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return RutValidators.default()(control);
  }

}
