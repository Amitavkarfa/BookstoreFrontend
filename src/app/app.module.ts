import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserserviceService } from './services/userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { OrdersComponent } from './orders/orders.component';
import { CartService } from './services/cart.service';
import { BooksService } from './services/books.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    ErrorpageComponent,
    HomepageComponent,
    SignupComponent,
    CartComponent,
    BooksComponent,
    StarRatingComponent,
    OrdersComponent,
    AdminpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    [UserserviceService,
    CartService,BooksService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
