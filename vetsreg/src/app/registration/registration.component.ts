import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  formData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    branchOfService: '',
    otherAssociations: '',
    email: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    this.validateDob(form);
    if (form.valid) {
      console.log(this.formData);
      form.resetForm();
    }
    
  }

  validateDob(form: NgForm) {
    const dobControl = form.controls['dob'];
    const today = new Date();
    const dob = new Date(this.formData.dateOfBirth);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      dobControl.setErrors({ dateOfBirthInvalid: true });
    } else {
      dobControl.setErrors(null);
    }
  }
}
