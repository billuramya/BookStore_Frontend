import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {
  submitted=false;
  display=true;
  constructor(private user:UserService,private formBuilder:FormBuilder,private router:Router){}
  signupForm=new FormGroup({
    fullName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    mobileNumber:new FormControl('',Validators.required)
  });
  onSubmit(){
    this.submitted=true;
    if(this.signupForm.valid){
      const reqData={
        email:this.signupForm.value.email,
        password:this.signupForm.value.password,
        fullName:this.signupForm.value.fullName,
        mobileNumber:this.signupForm.value.mobileNumber

      };
      console.log(reqData);
      this.user.register(reqData).subscribe((response:any)=>{
        console.log(response);
        if(response){
          alert('SignUp Successs Go For Login');
        }
      })
    }
  }
  login(){
    this.router.navigateByUrl("");
  }
}