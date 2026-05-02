import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student = [
    { name: 'abc', roll: 34 },
    { name: 'xyz', roll: 35 },
    { name: 'pqr', roll: 36 },
  ];

  getStudents() {
    return this.student;
  }
}
