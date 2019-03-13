import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm=new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  });

  constructor(private service : AccountService) { }

  ngOnInit() {
  }

  register()
  {
    let newUser={ name : this.registerForm.get('name').value, email : this.registerForm.get('email').value, password : this.registerForm.get('password').value}

    //console.log(newUser);

    this.service.register(newUser).subscribe((res : any)=>{
        console.log(res);
    });

  }

}
