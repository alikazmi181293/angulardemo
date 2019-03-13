import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : AccountService,private route: Router) { }

  ngOnInit() {
      this.service.getUserClaim().subscribe((res : any)=>{
          console.log(res);
      });
  }

  logOut()
  {
      localStorage.removeItem('userToken');
      this.route.navigate(['/login']);
  }

}
