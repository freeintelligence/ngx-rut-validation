import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultDirective } from './directives/default.directive';
import { FormatDirective } from './directives/format.directive';

@NgModule({
  declarations: [DefaultDirective, FormatDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DefaultDirective, FormatDirective]
})
export class NgxRutValidationModule { }
