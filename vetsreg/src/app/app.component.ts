import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainCopyComponent } from './main-copy/main-copy.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavComponent, MainCopyComponent, RegistrationComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNotes: string = `
    Mission Statement:
      At Put Veterans First, our mission is to empower and support veterans and disabled veterans in the United States by providing comprehensive resources and services to help them start and grow their own businesses. We are dedicated to honoring the service and sacrifice of our veterans by ensuring they have the tools and support they need to thrive in their entrepreneurial ventures.
`;
  showMission = true;
  
  onRegister(e: boolean) {
    // console.log(e)
    if(e==false)
      this.showMission = false;
    else {
      this.showMission = true;
    }
  }
}
