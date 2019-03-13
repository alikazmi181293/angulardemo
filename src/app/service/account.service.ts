import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl="http://localhost:20186";

  private header={
    headers:new HttpHeaders(
      {'Content-Type' : 'application/json'}
      )
  };

  authorizeHeader=new HttpHeaders(
    { 'Authorization' : 'Bearer '+localStorage.getItem('userToken')}
  );

  constructor(private http: HttpClient) 
  {

  }

  getUserClaim()
  {
    return this.http.get(this.baseUrl+'/api/Accounts/GetUserClaims',{headers : new HttpHeaders({ 'Authorization' : 'Bearer '+localStorage.getItem('userToken')})})
  }

  login(user)
  {
      return this.http.post(this.baseUrl+'/login',user,this.header)
  }

  register(user)
  {
      return this.http.post(this.baseUrl+'/api/Accounts/registerUser',user,this.header)
  }
}
