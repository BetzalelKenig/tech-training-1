import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'bk-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
})
export class CoursComponent implements OnInit {
  course: Course;
  id = 0;

  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params.id;
    //   this.course = this.courseService.getCourse(this.id);
    // });


    // this.id = this.route.snapshot.params.id;
    // console.log(`id: ${this.id}`);

    this.course = this.courseService.getCourse(this.id);
    // console.log(this.course);
  }

  getCourse() {
    return this.course;
  }
}
