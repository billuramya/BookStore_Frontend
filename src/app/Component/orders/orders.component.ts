import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

    constructor(private book:BookService,private router:Router){}
    cartvalue:any
   orders:boolean=false
   count:any
   cart:any={
    id:'',
    image:'',
    title:'',
    author:'',
    discountPrice:'',
    quantity:''
  }

   
  ngOnInit(): void {
    this.orders = true;
    let reqData = {
      userid: localStorage.getItem('userId') // Removed the semicolon here
    };
  
    this.book.getAllOrders(reqData).subscribe((resp: any[]) => {
      this.cart=resp;
      this.cart=this.cart.data;
    
    });
  }
  
}