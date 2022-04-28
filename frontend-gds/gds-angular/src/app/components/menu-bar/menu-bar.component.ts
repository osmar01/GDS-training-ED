import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  itemsMenuBar: MenuItem[] = [];
  itemsMenuUser: MenuItem[] = [];

  constructor() { }


  ngOnInit() {
    this.getItensMenuBar();
    this.getItensMenuUser();
  }

  getItensMenuUser(): void {
    this.itemsMenuUser = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {}
          // this.update();
        },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {}
          // this.delete();
        },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
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
