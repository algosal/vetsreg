import { Component,  output } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.css'
})
export class NavMobileComponent {
  initial_mobile_nav_visibility = false;
  mobile_nav_visibility = output<boolean>();

  onNavVisibility() {
    this.mobile_nav_visibility.emit(false);

  }
}
