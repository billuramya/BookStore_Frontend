import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any

  constructor( private httpService : HttpService) { }
  login(reqData: any){
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',

      })
    }
      return this.httpService.postService('https://localhost:7286/api/User/login',reqData,false,header)
    
  }
  register(reqData:any){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
      return this.httpService.postService('https://localhost:7286/api/User/Register' ,reqData,false,header)
    
  } 
  forgot(reqData:any){
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
    })
  }
  return this.httpService.postService('https://localhost:7286/api/User/ForgotPassword?Email='+reqData.Email,{},false,header)
  }
}
