import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  onNav() {
    alert("Still Under Construction")
  }


 constructor(private router: Router) {}

  onHome() {
    this.router.navigate(['/']); // Navigate to the root path
  }

  onResources() {
    this.router.navigate(['/resources']); // Navigate to the resources path
  }

  onServices() {
    this.router.navigate(['/services']); // Navigate to the services path
  }

  onPersonality() {
    this.router.navigate(['/personality']); // Navigate to the personality path
  }

  onDonate() {
    this.router.navigate(['/donate']); // Navigate to the donate path
  }

  onContactUs() {
    this.router.navigate(['/contact']); // Navigate to the contact path
  }

 

}
