import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Rohit', age: 22, course: 'AIML' },
    { name: 'Sam', age: 23, course: 'CSE' },
    { name: 'Suraj', age: 21, course: 'AIDS' },
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: { name: string; age: number; course: string }) {
    this.students.push(student);
  }
}
