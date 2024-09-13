import { Component, inject } from '@angular/core';
import { RegisterButtonComponent } from '../register-button/register-button.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [RegisterButtonComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css',
})
export class MissionComponent {
  userService = inject(UserService);

  constructor() {
    console.log(this.userService.loggedInUser);
  }
}
