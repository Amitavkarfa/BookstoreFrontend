import { Component, OnInit, OnDestroy } from '@angular/core';
import { Orders } from '../models/orders';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Orders[] = [];
  user: User = new User();
  private subscription!: Subscription;
  private userSubscription!: Subscription;
  constructor(private cartService: CartService,private loginservice: UserserviceService) {
    this.userSubscription = this.loginservice.getUserObservable().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.subscription = this.cartService.getOrder().subscribe(
      (data: Orders[]) => {
        this.orders = data;
      },
      (error) => {
        console.log("something went wrong");
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
