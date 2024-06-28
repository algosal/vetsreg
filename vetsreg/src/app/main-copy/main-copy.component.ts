import { Component, Input } from '@angular/core';
import { RegisterButtonComponent } from '../register-button/register-button.component';

@Component({
  selector: 'app-main-copy',
  standalone: true,
  imports: [RegisterButtonComponent],
  templateUrl: './main-copy.component.html',
  styleUrl: './main-copy.component.css'
})
export class MainCopyComponent {
  @Input({ required: true }) myNotes !: string;
  

}
