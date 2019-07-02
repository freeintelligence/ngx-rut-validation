import { Directive, ElementRef, HostListener, ContentChild } from '@angular/core';
import { format } from 'rut.js';
import { NG_VALIDATORS, NgModel, FormControlName } from '@angular/forms';

@Directive({
  selector: '[rutFormat]',
})
export class FormatDirective {

  @ContentChild(NgModel, { static: true }) protected model: NgModel;
  @ContentChild(FormControlName, { static: true }) protected formControlName: FormControlName;

  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = this.elRef.nativeElement;
  }

  @HostListener('keyup')
  onKeyUp() {
    if (typeof this.element.value === 'string' && this.element.value.length > 1) {
      this.element.value = format(this.element.value);

      if (this.model && this.model.update && this.model.update.emit) {
        this.model.update.emit(this.element.value);
      }
      if (this.formControlName && this.formControlName.control && this.formControlName.control.setValue) {
        this.formControlName.control.setValue(this.element.value);
      }
    }
  }

}
