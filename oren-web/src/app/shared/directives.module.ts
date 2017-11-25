import { ComponentsModule } from './../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinValueDirective } from "app/shared/directives/min-value.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    declarations: [MinValueDirective]
})
export class DirectivesModule {}