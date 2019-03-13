import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginError=false;

  loginForm=new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  constructor(private service : AccountService,private route: Router) { }

  ngOnInit() {
  }

  login()
  {
      let user="username="+this.loginForm.get('email').value+"&password="+this.loginForm.get('password').value+"&grant_type=password";
      
      this.service.login(user).subscribe(
      (res : any)=>
      {
          console.log(res);
          localStorage.setItem('userToken',res.access_token)
          this.route.navigate(['/home']);
      },
      (err : HttpErrorResponse)=>
      {
          this.loginError=true;
      }
      );
  }

}
