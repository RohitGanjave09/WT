import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity2',
  imports: [FormsModule],
  templateUrl: './activity2.html',
  styleUrl: './activity2.css',
})
export class Activity2 {
  message: string = '';
}
