import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  title = 'gds-angular';

  showSideNavToolbar = false;
  username!: string;
  
  constructor(
    private authService: AuthService,
  ){
    this.authService.showMenu.subscribe( data => {
      this.showSideNavToolbar = data;
    });
    this.authService.username.subscribe( data => {
      this.username = data;
    });
  }

}
