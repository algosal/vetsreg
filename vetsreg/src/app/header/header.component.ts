import { Component, EventEmitter, Output } from '@angular/core';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onHeading() {
    window.location.href = "";
  }

 
}
