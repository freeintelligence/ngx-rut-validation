import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultDirective } from './directives/default.directive';

@NgModule({
  declarations: [DefaultDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DefaultDirective]
})
export class NgxRutValidationModule { }
