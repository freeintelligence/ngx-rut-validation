import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultDirective } from './directives/default.directive';
import { FormatDirective } from './directives/format.directive';
import { FormatPipe } from './pipes/format.pipe';

@NgModule({
  declarations: [DefaultDirective, FormatDirective, FormatPipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DefaultDirective, FormatDirective, FormatPipe]
})
export class NgxRutValidationModule { }
