import { TestBed } from '@angular/core/testing';

import { NgxRutValidationService } from './ngx-rut-validation.service';

describe('NgxRutValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRutValidationService = TestBed.get(NgxRutValidationService);
    expect(service).toBeTruthy();
  });
});
