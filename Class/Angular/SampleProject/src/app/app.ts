import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import { FormsModule } from '@angular/forms';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, RouterLink, FormsModule, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('StudentManagement');
}
