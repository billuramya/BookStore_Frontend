import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderssucess',
  templateUrl: './orderssucess.component.html',
  styleUrl: './orderssucess.component.css'
})
export class OrderssucessComponent {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotocards(){
    this.router.navigate(['dashboard/getallbooks'])
  }
}
