import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('user_email');
  }

  login(email: string, pass: string){
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_password', pass);
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
  }

  logout(){
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_password');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
