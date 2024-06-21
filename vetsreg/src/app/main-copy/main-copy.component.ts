import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-copy',
  standalone: true,
  imports: [],
  templateUrl: './main-copy.component.html',
  styleUrl: './main-copy.component.css'
})
export class MainCopyComponent {
  @Input({required:true}) myNotes !: string;

}
