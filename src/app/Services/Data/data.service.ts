
import { Injectable } from '@angular/core';
//import { Book } from '../../Model/mdel';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../Model/bookstore.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;

  constructor() { }
  Books:Book[]=[];


  private bookList=new BehaviorSubject<any>([]);
  bookListAccess=this.bookList.asObservable();

  updateBookList(newValue:any){
    this.bookList.next(newValue);
  }

  private searchBook=new BehaviorSubject<string>('');
  searchBookAccess=this.searchBook.asObservable(); 

  private messageSorce = new BehaviorSubject([]);
  IncomingData=this.messageSorce.asObservable();
  
  outgoingData(message : any){
    console.log(message);
    this.messageSorce.next(message);
  }
}
