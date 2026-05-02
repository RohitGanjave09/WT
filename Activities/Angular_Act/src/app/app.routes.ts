import { Routes } from '@angular/router';
import { Activity1StudentProfile } from '../Components/activity1-student-profile/activity1-student-profile';
import { Activity2 } from '../Components/activity2/activity2';
import { Activity4UserList } from '../Components/activity4-user-list/activity4-user-list';
import { Home } from '../Components/home/home';
import { Activity3 } from '../Components/activity3/activity3';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'activity1', component: Activity1StudentProfile },
  { path: 'activity2', component: Activity2 },
  { path: 'activity3', component: Activity3 },
  { path: 'activity4', component: Activity4UserList },
];
