import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first Name field validity', () => {
    let name = component.registerForm.controls['firstName'];
    // expect(name.valid).toBeFalsy();
    name.setValue("");
    expect(name.valid).toBeFalsy();
    name.setValue("AAA");
    expect(name.hasError('minlength')).toBeTruthy();
     
});

it('LastName field validity', () => {
  let lastName = component.registerForm.controls['lastName'];
  // expect(name.valid).toBeFalsy();
  lastName.setValue("");
  expect(lastName.valid).toBeFalsy();
  lastName.setValue("BBB");
  expect(lastName.hasError('minlength')).toBeTruthy();
   
});

it('country field validity', () => {
  let country = component.registerForm.controls['country'];
  // expect(name.valid).toBeFalsy();
  country.setValue("");
  expect(country.valid).toBeFalsy();
   
});

it('phone number field validity', () => {
  let phoneNumber = component.registerForm.controls['phoneNumber'];
  // expect(name.valid).toBeFalsy();
  phoneNumber.setValue("");
  expect(phoneNumber.valid).toBeFalsy();

  phoneNumber.setValue("AAA");
  expect(phoneNumber.hasError('pattern')).toBeTruthy();
   
});


});
