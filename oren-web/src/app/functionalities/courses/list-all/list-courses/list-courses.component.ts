import { Course } from './../../models/course';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/functionalities/services/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  public courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.listAllCourses();
  }

  private listAllCourses(): void {
    this.courseService.listCourses().subscribe(courses => this.courses = courses);
  }

}
