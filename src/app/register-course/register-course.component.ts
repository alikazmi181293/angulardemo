import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {

  courseRegisterForm=new FormGroup({
    name : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    creditHours : new FormControl('',Validators.required)
  });

  constructor(private service : CourseService,private route: Router) { }

  ngOnInit() {
  }

  register()
  {
    let course=this.courseRegisterForm.value;
    console.log(course)
    this.service.postCourse(course).subscribe((res : any)=>{
        console.log(res);
        this.route.navigate(['/course']);
    });
  }
}
