import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Los utilizamos para "informar" si iniciamos sesión o no
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  //Utilizamos localstorage para saber si ya se encuentra un correo registrado
  private hasToken(): boolean {
    return !!localStorage.getItem('user_email');
  }

  //Iniciar sesión
  login(email: string, pass: string){
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_password', pass);
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
  }

  //Aqui obtenemos el método para cerrar la sesión
  logout(){
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_password');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
