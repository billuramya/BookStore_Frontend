// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-cards',
//   templateUrl: './cards.component.html',
//   styleUrl: './cards.component.css'
// })
// export class CardsComponent implements OnInit {
  

//   constructor(private router:Router){}

//   @Input() Book:any;

  

//   ngOnInit(): void {
   
//   }

//   goToBookDetails(){
//     this.router.navigate(['dashboard/bookDetails', this.Book.id]);
//   }


  



  
// }
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(private router:Router){}

  @Input() Book:any;

  ngOnInit(): void {}

  // goToBookDetails(){
  //   this.router.navigate(['/bookdetails', this.Book.id])
  // }

  goToBookDetails(){
    this.router.navigate(['dashboard/bookDetails', this.Book.bookId])
  }
}
