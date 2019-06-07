import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRutValidationComponent } from './ngx-rut-validation.component';

describe('NgxRutValidationComponent', () => {
  let component: NgxRutValidationComponent;
  let fixture: ComponentFixture<NgxRutValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRutValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRutValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
