import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'courses',  component: CoursesComponent },
  { path: 'users',  component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalitiesRoutingModule { }
