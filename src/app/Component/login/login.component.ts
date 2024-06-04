import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm!: FormGroup;

  constructor(private user: UserService, private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required),
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      console.log(reqData);

      this.user.login(reqData).subscribe(
        (response: any) => {
          console.log(response);
          if (response) {
            
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('userId', response.data.userId);
            localStorage.setItem('fullName', response.data.fullName);
            localStorage.setItem('mobileNumber', response.data.mobileNumber);
            localStorage.setItem('password', response.data.password);
            this.router.navigateByUrl('dashboard/getallbooks')
          } else {
            alert('Login failed');
          }
        },
        
      );
    } 
  }
  Signup(){
    this.router.navigateByUrl("signup");
  }
  dashboard(){
    
  }
}
