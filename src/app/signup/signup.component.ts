import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  message:any;
  emailerror!:string;
  user:User=new User();
  form=new FormGroup({
    first_name:new FormControl(this.user.first_name,[
      Validators.required,
      Validators.minLength(2)
    ]),
    last_name:new FormControl(this.user.last_name,[Validators.required,Validators.minLength(2)]),
    email:new FormControl(this.user.email,[Validators.required,Validators.email]),
    password:new FormControl(this.user.password,[Validators.required,Validators.minLength(8)]),
    phone_number:new FormControl(this.user.phone_number,[Validators.required,Validators.pattern('[0-9]{10}')]),
    address:new FormControl(this.user.address,[Validators.required])
  });
 constructor(private service:UserserviceService,private router: Router) { }
 ngOnInit():void { }
 get f(){
  return this.form.controls;
}

public registerNow(){
  let resp=this.service.doRegistration(this.form.value);
  resp.subscribe((data)=>{this.message=data;
    if(data!=null)
    this.router.navigate(['/login']);
    else
    this.emailerror="This Email is already Registered";
  });
}
}
