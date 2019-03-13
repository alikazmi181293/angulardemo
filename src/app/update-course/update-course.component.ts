import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  course : any;

  courseUpdateForm=new FormGroup({
    Id : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    creditHours : new FormControl('',Validators.required)
  });

  constructor(private service : CourseService,private activatedRoute : ActivatedRoute,private route : Router) { }

  ngOnInit() 
  {
    let id=0;
    this.activatedRoute.paramMap.subscribe((res:any)=>{
        id=res.get('id');
    });
    this.service.getCourse(id).subscribe((res:any)=>{
      console.log(res);  
      this.course=res;

      this.courseUpdateForm.get('Id').setValue(this.course.Id);
      this.courseUpdateForm.get('name').setValue(this.course.Name);
    this.courseUpdateForm.get('description').setValue(this.course.Description);
    this.courseUpdateForm.get('creditHours').setValue(this.course.CreditHours); 
    });
    
  }

  update()
  {
    let course=this.courseUpdateForm.value;
    this.service.putCourse(course).subscribe((res:any)=>{
      this.route.navigate(['/course']);
    });
  }

}
