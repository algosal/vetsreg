import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-button',
  standalone: true,
  imports: [],
  templateUrl: './register-button.component.html',
  styleUrl: './register-button.component.css'
})
export class RegisterButtonComponent {

  constructor(private router:Router){}
    
  register() {
    this.router.navigate(["/register"]);

  }

  login() {
    alert("Not Available Yet");
  }
}
