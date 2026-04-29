import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fname: String = 'Tahir';
  myRoll: Number = 34;
  img: String = '';

  showbutton() {
    this.fname = 'abc';
    alert('Name changed');
  }

  cars: string[] = ['BMW', 'Audi', 'Mercedes', 'porsche'];

  isloggedIn: boolean = true;
}
