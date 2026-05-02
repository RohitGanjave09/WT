import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddStudent } from './add-student/add-student';
import { StudentList } from './student-list/student-list';

const routes: Routes = [
  { path: '', component: Home, data: { renderMode: 'server' } },
  { path: 'add', component: AddStudent, data: { renderMode: 'server' } },
  { path: 'list', component: StudentList, data: { renderMode: 'server' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const serverRoutes = routes;