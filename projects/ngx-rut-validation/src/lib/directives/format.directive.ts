import { Directive, ElementRef, HostListener } from '@angular/core';
import { format, clean } from 'rut.js';

@Directive({
  selector: '[rutFormat]'
})
export class FormatDirective {

  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = this.elRef.nativeElement;
  }

  @HostListener('keyup')
  onkeyup() {
    if (typeof this.element.value === 'string' && this.element.value.length > 1) {
      this.element.value = format(this.element.value);
    }
  }

}
