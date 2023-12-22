import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user:User=new User();
  responce:any;
  constructor(private loginservice:UserserviceService){ }
  ngOnInit(): void {

  }
  login():void{
    this.loginservice.login(this.user).subscribe((data:User)=>{
      this.responce=data;
      this.loginservice.addUserDetails(data);
      this.user=new User();
    });
  }
}
