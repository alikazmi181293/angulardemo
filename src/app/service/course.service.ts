import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService 
{
  private baseUrl="http://localhost:20186/api/courses"

  private headers={
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http : HttpClient) 
  {

  }

  getCourses()
  {
    return this.http.get(this.baseUrl,{headers : new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('userToken')})})
  }

  postCourse(course)
  {
    return this.http.post(this.baseUrl,course,{headers : new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('userToken')})})
  }

  deleteCourses(id)
  {
    return this.http.delete(this.baseUrl+'/'+id,{headers : new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('userToken')})})
  }
  getCourse(id)
  {
    return this.http.get(this.baseUrl+'/'+id,{headers : new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('userToken')})})
  }

  putCourse(course)
  {
    return this.http.put(this.baseUrl+'/'+course.Id,course,{headers : new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('userToken')})})
  }
}
