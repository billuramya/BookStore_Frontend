import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Component/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import { SignupComponent } from './Component/signup/signup.component';
import { HeaderComponent } from './Component/header/header.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
//import { GetBooksComponent } from './Component/get-books/get-books.component';
import { GetallbooksComponent } from './Component/getallbooks/getallbooks.component';
import { CardsComponent } from './Component/cards/cards.component';

import { MatMenuModule } from '@angular/material/menu';
import { BookDetailsComponent } from './Component/book-details/book-details.component';
import { CartComponent } from './Component/cart/cart.component';
import { PersonaldetailsComponent } from './Component/personaldetails/personaldetails.component';
import { AddressComponent } from './Component/address/address.component';
import { MatRadioModule } from '@angular/material/radio';
import { OrdersummaryComponent } from './Component/ordersummary/ordersummary.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { OrderssucessComponent } from './Component/orderssucess/orderssucess.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { SearchBookPipe } from './pipe/search.book.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    DashboardComponent,
   
    GetallbooksComponent,
    CardsComponent,
    SearchBookPipe,
    BookDetailsComponent,
    CartComponent,
    PersonaldetailsComponent,
    AddressComponent,
    OrdersummaryComponent,
    OrdersComponent,
    OrderssucessComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatDividerModule,
    MatRadioModule,
    ReactiveFormsModule
    
    

  
    

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
