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
      },
      {
        label: 'Devices',
        icon: 'pi pi-fw pi-circle',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
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
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
          }
        ]
      },
    ];

  }
}
