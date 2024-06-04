import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../Services/Data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dialog:MatDialog,private router:Router,private data:DataService){}
  loginclick:boolean=false
  loggedin:boolean=false

  profiledata(){
    if(localStorage.getItem('token')){
      this.loggedin=!this.loggedin;
    }
    else{
      this.loginclick=!this.loginclick
    }
  }
  login(){
  const dialogRef=this.dialog.open(LoginComponent,{width:'740px',height:'475px'});
  dialogRef.afterClosed().subscribe(result=>{
  console.log('The dialog was closed');

  });
  this.loginclick=!this.loginclick;
}
logout(){
  this.loggedin=!this.loggedin;
  localStorage.removeItem('token');

}
profile(){
 this.router.navigate(['dashboard/personal'])
 console.log('Personal');
}


gologout(){
  this.router.navigateByUrl('')
}
tocart(){
  this.router.navigate(['dashboard/carts'])

}
gotoOrders(){
  this.router.navigate(['dashboard/orders'])
  console.log('Order Sucessfull');
}
wishlist(){
  this.router.navigate(['dashboard/wishlist'])
}
search(event:any){
  console.log(event.target.value);
  this.data.outgoingData(event.target.value);
}

}