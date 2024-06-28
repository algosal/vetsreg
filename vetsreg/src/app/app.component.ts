import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainCopyComponent } from './main-copy/main-copy.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HeaderComponent, NavComponent, MainCopyComponent,
    RegistrationComponent, FormsModule, RouterOutlet, NavMobileComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileNavVisibility = "mobile-nav-visibility";
  mobileVisibility() {
    this.mobileNavVisibility = "no-class";
  }
  onMobileNavClick() {
    this.mobileNavVisibility = "mobile-nav-visibility";
  }
}
