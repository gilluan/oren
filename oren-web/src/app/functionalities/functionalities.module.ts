import { CoreModule } from './../core/core.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { DirectivesModule } from 'app/shared/directives.module';
import { CustomFormsModule } from 'ng4-validators';
import { ListCoursesComponent } from './courses/list-all/list-courses/list-courses.component';


@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FunctionalitiesRoutingModule,
    ComponentsModule,
    DirectivesModule,
    CustomFormsModule
  ],
  declarations: [CoursesComponent, UsersComponent, ListCoursesComponent]
})
export class FunctionalitiesModule { }
