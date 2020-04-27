import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordResponseComponent } from './forgot-password-response.component';

describe('ForgotPasswordResponseComponent', () => {
  let component: ForgotPasswordResponseComponent;
  let fixture: ComponentFixture<ForgotPasswordResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
