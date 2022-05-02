import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input() username!: string;

  itemsMenuBar: MenuItem[] = [];
  itemsMenuUser: MenuItem[] = [];

  constructor( private authService: AuthService ) { }
  

  ngOnInit() {
    this.getItensMenuBar();
    this.getItensMenuUser();
  }

  logout(): void {
    this.authService.logout();
  }

  getItensMenuUser(): void {
    this.itemsMenuUser = [

      {
        label: 'Logout', icon: 'pi pi-times', command: () => {
          this.logout();
        }
      },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
    ];
  }

  getItensMenuBar(): void {
    this.itemsMenuBar = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'Devices',
        icon: 'pi pi-fw pi-circle',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
            routerLink: '/device'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/device-create'
          }
        ]
      },
      {
        label: 'Categories',
        icon: 'pi pi-fw pi-th-large',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
            routerLink: '/category'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/category-create'
          }
        ]
      },
    ];

  }
}
