import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { Cartitem } from '../models/cartitem';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy{
  cart!:Cart;
  user: User = new User();
  private userSubscription!: Subscription;
  constructor(private cartService:CartService,private loginservice: UserserviceService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    });
    this.user = this.loginservice.getUserDetails();
    this.userSubscription = this.loginservice.getUserObservable().subscribe((user:User) => {
      this.user = user;
    });
  }
  ngOnInit():void{

   }

  removeFromCart(cartItem:Cartitem){
    this.cartService.removeFromCart(cartItem.book.title);
  }

  changeQuantity(cartItem:Cartitem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.title,quantity);
  }


  orderfinal() {

    this.cart.order_date=new Date();
    this.cartService.submitOrderWithCustomerId(this.cart,this.user.customer_id).subscribe(
      (response) => {
        // Handle success if needed

        console.log('Order submitted successfully:', response);
        this.cartService.clearCart();
      },
      (error) => {
        // Handle error if needed
        console.error('Error submitting order:', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.userSubscription.unsubscribe();
  }
}
