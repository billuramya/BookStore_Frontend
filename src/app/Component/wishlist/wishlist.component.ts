import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';
import { Router } from '@angular/router';
import { Book } from '../../Model/bookstore.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  cartvalue: any[] = [];
  Books: any[] = [];
  count: number = 1;
  cart: any[] = [];

  constructor(private book: BookService, public router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const reqData = {
      userid: localStorage.getItem('userId')
    };

    this.book.wishList(reqData).subscribe((response: any) => {
      console.log('normal', response);

      if (response.success && Array.isArray(response.data)) {
        const wishlistItems = response.data;
        this.book.updatewhishList(wishlistItems);

        this.cartvalue = wishlistItems;
        console.log('cartvalue', this.cartvalue);

        this.book.getBooks().subscribe((booksResponse: any) => {
          this.Books = booksResponse.data;

          const wishlistData = this.Books.filter((book: any) => {
            return this.cartvalue.some((cartItem: any) => {
              return Number(cartItem.bookId) === book.bookId;
            });
          });
          this.cart = wishlistData;
          console.log('Wishlist Data:', wishlistData);

          if (this.cartvalue.length > 0 && this.cartvalue[0].quantity) {
            this.count = this.cartvalue[0].quantity;
          }
        });
      } else {
        console.error('Invalid response format:', response);
      }
    });
  }

  deletewhishlist(bookId: any): void {
    debugger
    const reqData = {
      userId: localStorage.getItem('userId'),
      bookid: bookId
    };

    console.log(reqData);

    this.book.deleteWish(reqData).subscribe((resp: any) => {
      this.cart = this.cart.filter((item: any) => item.bookId !== bookId);
      console.log(resp);
      console.log('cart', this.cart);
      console.log('id value', reqData);
    });
  }

  tocards(): void {
    this.router.navigate(['dashboard/getallbooks']);
  }
}
