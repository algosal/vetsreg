import { Component } from '@angular/core';
import { RegisterButtonComponent } from '../register-button/register-button.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [RegisterButtonComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {

}
