import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }


  ngOnInit() {
    this.items = [
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
