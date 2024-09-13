import { Component, Input, inject } from '@angular/core';
import { RegisterButtonComponent } from '../register-button/register-button.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-copy',
  standalone: true,
  imports: [RegisterButtonComponent],
  templateUrl: './main-copy.component.html',
  styleUrl: './main-copy.component.css',
})
export class MainCopyComponent {
  // @Input({ required: true }) myNotes !: string;
  userService = inject(UserService);

  constructor() {
    console.log(this.userService.loggedInUser);
  }
}
