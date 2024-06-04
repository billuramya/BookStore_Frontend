import { Component } from '@angular/core';
import { HttpService } from '../../Services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/Book/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute, private book: BookService, private httpService: HttpService, private router:Router) {}

  id: any;
  Books: any;
  count:any=1
  button=true

  newdata: any = {
    id: '',
    author: '',
    discountPrice: '',
    quantity: '',
    tittle: '',
    description: '',
    image: ''
  };

  ngOnInit(): void {
    // Accessing the 'id' route parameter
    this.id = this.activatedRoute.snapshot.params;

    // Fetching books from the service
    this.book.getBooks().subscribe(resp => {
      this.Books = resp.data;

      // Filtering the book with the specified 'id'
      const result = this.Books.filter((item: any) => item.bookId ==this.id.id);
      console.log(result);
      this.newdata=result[0];
      console.log(this.newdata); 
    }); // Added closing parentheses here
  }

  add(cartItem:any){

    let reqData={
      userId:localStorage.getItem('userId'),
      bookId:cartItem
    }
    console.log(reqData);

    this.book.addWish(reqData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.success){
        this.router.navigate(['dashboard/wishlist'])
      }
    })

  }

  increment(){
    this.count+=1;
  }

  decrement(){
    if(this.count>1){
      this.count-=1;
    }
  }

  Quantity(bookId: any) {
    debugger
    console.log("Adding book to cart:", bookId);
    this.button = !this.button;

    this.count = 1;
    let reqData = {
        quantity: this.count,
        bookId: bookId, // Directly use bookId
        userid: localStorage.getItem('userId')
    }

    console.log("Request Data:", reqData);

    this.book.addcart(reqData).subscribe((res: any) => {
        console.log(res);
    });
}


}