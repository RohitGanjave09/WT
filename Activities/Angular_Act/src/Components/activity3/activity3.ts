import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity3',
  imports: [CommonModule, FormsModule],
  templateUrl: './activity3.html',
  styleUrl: './activity3.css',
})
export class Activity3 {
  // ngIf
  showDiv = true;

  // ngSwitch
  selected = 'A';

  // ngClass
  isActive = true;

  // ngStyle
  bgColor = 'lightblue';
  fontSize = 16;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

  changeStyle() {
    this.bgColor = this.bgColor === 'lightblue' ? 'pink' : 'lightblue';
    this.fontSize = this.fontSize === 16 ? 24 : 16;
  }
}
