import { Component } from '@angular/core';

@Component({
  selector: 'app-activity1-student-profile',
  imports: [],
  templateUrl: './activity1-student-profile.html',
  styleUrl: './activity1-student-profile.css',
})
export class Activity1StudentProfile {
  name: string = 'Tahir';
  age: number = 22;
  image: string = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png';
}
