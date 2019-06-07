import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RutValidators } from 'ngx-rut-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-rut-validation-app';

  form = new FormGroup({
    rut: new FormControl('', [ Validators.required, RutValidators.default ])
  });
}
