import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HeaderComponent } from './Component/header/header.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
//import { GetBooksComponent } from './Component/get-books/get-books.component';
import { GetallbooksComponent } from './Component/getallbooks/getallbooks.component';
import { BookDetailsComponent } from './Component/book-details/book-details.component';
import { CartComponent } from './Component/cart/cart.component';
import { PersonaldetailsComponent } from './Component/personaldetails/personaldetails.component';
import { AddressComponent } from './Component/address/address.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { OrdersummaryComponent } from './Component/ordersummary/ordersummary.component';
import { OrderssucessComponent } from './Component/orderssucess/orderssucess.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'header',component:HeaderComponent},
  {path:'address',component:AddressComponent},
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    
    {path:'getallbooks',component:GetallbooksComponent},
    {path:'bookDetails/:id',component:BookDetailsComponent},
    {path:'carts',component:CartComponent},
    {path:'personal',component:PersonaldetailsComponent},
    {path:'address',component:AddressComponent},
    {path:'orders', component:OrdersComponent},
    {path:'ordersSummary',component:OrdersummaryComponent},
    {path:'ordersucess',component:OrderssucessComponent},
    {path:'wishlist',component:WishlistComponent}
    
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
