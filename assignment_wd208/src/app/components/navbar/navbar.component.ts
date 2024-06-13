import { Component } from '@angular/core';
import { Menu } from '../../../interface/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menus: Menu[] =
    [
      {
        id: 1,
        name: 'Home',
        path: 'admin',
        parent: 0,
      },
      {
        id: 2,
        name: 'About us',
        path: 'about-us',
        parent: 0,
      },
      {
        id: 3,
        name: 'Products',
        path: 'admin/products',
        parent: 0,
      },
      {
        id: 4,
        name: 'Fashion',
        path: 'fashion',
        parent: 3,
      },
      {
        id: 5,
        name: 'Jewelry',
        path: 'jewelry',
        parent: 3,
      },
      {
        id: 6,
        name: 'Contact',
        path: 'contact',
        parent: 0,
      }
    ]
    checkMenu = (menuId:number)=>{
      let check: boolean = false;
      for (let item of this.menus) {
        if (item.parent===menuId) {
            check= true
        };

      }
      return check
    }
}
