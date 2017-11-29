import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { DirectivesModule } from 'app/shared/directives.module';
import { CustomFormsModule } from 'ng4-validators';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FunctionalitiesRoutingModule,
    ComponentsModule,
    DirectivesModule,
    CustomFormsModule
  ],
  declarations: [CoursesComponent, UsersComponent]
})
export class FunctionalitiesModule { }
