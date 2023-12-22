// import { UserserviceService } from './../services/userservice.service';
// import { User } from '../models/user';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css',
// })
// export class HeaderComponent implements OnInit {
//   user: User=new User();
//   constructor(private loginservice: UserserviceService) {}
//   ngOnInit(): void {
//     this.user=this.loginservice.getUserDetails();
//   }

//   signOut(): void {
//     this.loginservice.removeUserDetails();
//   }
// }

import { UserserviceService } from './../services/userservice.service';
import { User } from '../models/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User = new User();
  private userSubscription!: Subscription;

  constructor(private loginservice: UserserviceService) {}

  ngOnInit(): void {
    this.user = this.loginservice.getUserDetails();
    this.userSubscription = this.loginservice.getUserObservable().subscribe((user) => {
      this.user = user;
    });
  }

  signOut(): void {
    this.loginservice.removeUserDetails();
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.userSubscription.unsubscribe();
  }
}

