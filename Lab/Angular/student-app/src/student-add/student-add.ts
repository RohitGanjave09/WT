import { Component } from '@angular/core';
import { StudentService } from '../Services/student-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  imports: [FormsModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
  name = '';
  age = 0;
  course = '';

  constructor(private studentService: StudentService) {}

  addStudent() {
    const newStudent = {
      name: this.name,
      age: this.age,
      course: this.course,
    };

    this.studentService.addStudent(newStudent);

    // Clear form
    this.name = '';
    this.age = 0;
    this.course = '';
  }
}
