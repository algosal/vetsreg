import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // viewReg = output<string>();
  @Output() viewReg = new EventEmitter<boolean>();
  oldValue = true;

  register() {
    // alert("not available yet");
    this.oldValue = !this.oldValue;
    this.viewReg.emit(this.oldValue);
    
    // window.location.href = "https://putveteransfirst.nyc/carts";
  }
}
