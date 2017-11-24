import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FunctionalitiesRoutingModule,
    ComponentsModule
  ],
  declarations: [CoursesComponent]
})
export class FunctionalitiesModule { }
