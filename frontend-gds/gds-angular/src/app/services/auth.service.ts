import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../models/user';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado = false;
  user = ''
  public showMenu = new EventEmitter<boolean>();
  public username = new EventEmitter<string>();


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  authLogin(user: User) {
    if (user.login === 'admin' && user.password === 'admin') {
      this.autenticado = true;
      this.showMenu.emit(this.autenticado);
      this.router.navigate(['home'], { relativeTo: this.route });
    }
    else {
      this.showMenu.emit(this.autenticado);
      this.router.navigate(['login'], { relativeTo: this.route });
      
    }
  }
  
  setUser(user: User): void {
    this.user = user.login
    this.username.emit(this.user);

  }

  logout(): void {
    this.autenticado = false;
    this.showMenu.emit(this.autenticado);
  }

  getAutenticado() {
    return this.autenticado;
  }
}
