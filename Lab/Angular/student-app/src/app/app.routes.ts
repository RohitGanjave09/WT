import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { StudentAdd } from '../student-add/student-add';
import { StudentList } from '../student-list/student-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'student-list', component: StudentList },
  { path: 'student-add', component: StudentAdd },
];
