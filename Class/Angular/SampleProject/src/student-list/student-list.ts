import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = []; //any[] - it can store array of any type of data

  constructor(private studentService: StudentService) {} //dependency injection

  //lifecycle hook :ng oninit is a lifecycle hook this method run automatically when component load
  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}
