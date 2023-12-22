import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private user: User = this.getValuesfromStorage();
  private userSubject: BehaviorSubject<User> = new BehaviorSubject(this.user);

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public doRegistration(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/register", user);
  }

  public login(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/log_in", user);
  }

  addUserDetails(user: User): void {
    this.user = user;
    this.setValuesfromStorage();
  }

  removeUserDetails(): void {
    this.user = new User();
    this.setValuesfromStorage();
  }

  getUserDetails(): User {
    return this.getValuesfromStorage();
  }

  getUserObservable(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private setValuesfromStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userJSON = JSON.stringify(this.user);
      sessionStorage.setItem('user', userJSON);
      this.userSubject.next(this.user);
    }
  }

  private getValuesfromStorage(): User {
    if (isPlatformBrowser(this.platformId)) {
      const userJSON = sessionStorage.getItem('user');
      return userJSON ? JSON.parse(userJSON) : new User();
    }
    return new User();
  }
}
