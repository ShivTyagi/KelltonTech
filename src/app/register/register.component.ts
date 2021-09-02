import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submittedSucess : Boolean = false;
  submitted :Boolean =  false;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm  = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['',  [Validators.required, Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      country: ['', Validators.required],
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    this.submittedSucess = true;
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
