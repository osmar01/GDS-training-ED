import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../models/user';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado = false;
  public showMenu = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  authLogin(user: User) {
    console.log(user);

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

  getAutenticado() {
    return this.autenticado;
  }
}
