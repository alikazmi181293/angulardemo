import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : any[];

  constructor(private service : CourseService) { }

  ngOnInit() {
    this.service.getCourses().subscribe((res: any)=>{
      console.log(res);  
      this.courses=res;
    });
  }

  delete(course)
  {
    this.service.deleteCourses(course.Id).subscribe((res : any)=>{
      console.log(res);
      let index=this.courses.indexOf(course);
      this.courses.splice(index,1);
    });
  }
}
