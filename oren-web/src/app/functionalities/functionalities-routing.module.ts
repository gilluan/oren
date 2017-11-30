import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursesComponent } from 'app/functionalities/courses/list-all/list-courses/list-courses.component';

const routes: Routes = [
  { path: 'courses',  component: CoursesComponent },
  { path: 'users',  component: UsersComponent },
  { path: 'all-courses',  component: ListCoursesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalitiesRoutingModule { }
