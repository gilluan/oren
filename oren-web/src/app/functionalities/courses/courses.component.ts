import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public idade: number;

  coursesOptions = [
    {label: 'tsts', value: '233'},
    {label: 'gilluan', value: 'sdsd'}]

  constructor() { }

  ngOnInit() {
  }

}