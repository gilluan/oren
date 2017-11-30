import { Course } from './../courses/models/course';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseService {

  private coursesUrl = '';

  constructor(private httpClient: HttpClient) { }

  /* List all courses */
  public listCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl);
  }

}