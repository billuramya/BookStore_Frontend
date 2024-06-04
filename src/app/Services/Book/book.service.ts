import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Book, Cart } from '../../Model/bookstore.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  token:any
  Books:Book[]=[]
  Carts:Cart[]=[]

  constructor(private httpService:HttpService,private http:HttpClient) {this.token=localStorage.getItem('token') }

  getaddress(reqData: any) {
    const userid = reqData.userid;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.getService(`https://localhost:7286/api/Address/GetUserAddresses?userid=${userid}`, true, header);
  }


  getBooks(): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.httpService.getService('https://localhost:7286/api/Book/GetAllBooks', true,header,);
  }


  private cartList = new BehaviorSubject<any>([]);
  currCartList = this.cartList.asObservable();
  updateCartList(newValue: any[]) {
    this.cartList.next(newValue);
  }



  cartsList(reqData:any):Observable<any>{
    const userid = reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7286/api/Cart/GetCard?userid=${userid}`,true,header);
  }

  
  deleteCart(reqData:any): Observable<any>{
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }; 
    return this.httpService.postService('https://localhost:7286/api/Cart/DeleteCart',reqData,true,header);
  }
 
  
  wishList(reqData:any){
    const userid = reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7286/api/WishList/GetWhishList?userid=${userid}`,true,header);
  }

  private whishList=new BehaviorSubject<any>([]);
  currWhishList=this.whishList.asObservable();

  updatewhishList(newValue:any){
    this.whishList.next(newValue);
  }

  deleteWish(reqData:any):Observable<any>{
    const userid=reqData.userid;
    const bookid=reqData.bookid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
      
    }
    return this.httpService.postService('https://localhost:7286/api/WishList/DeleteWhishList',reqData,true,header);
  }
  

  addWish(reqData:any):Observable<any>{
    
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
      
    }
    return this.httpService.postService('https://localhost:7286/api/WishList/AddToWishList',reqData,true,header);
  }


  getAllOrders(reqData:any):Observable<any>{
    const userid=reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7286/api/Order/GetAllOrder?userid=${userid}`,true,header);
  }

  addcart(reqData:any):Observable<any>{
    let userid=reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:7286/api/Cart/AddToCart?userid=${userid}`,reqData,true,header);
  }



}