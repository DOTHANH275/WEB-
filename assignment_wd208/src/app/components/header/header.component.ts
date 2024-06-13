import { Component } from '@angular/core';
import { Menu } from '../../../interface/menu';
import axios from 'axios';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menus: Menu[] = [];
  async ngOnInit() {
    const { data } = await axios.get('http://localhost:3000/menus');
    this.menus = data;
  }
  searchForm = new FormGroup({
    keywords: new FormControl(''),
  });

  router = new Router();
  onSearch() {
    const keyword = this.searchForm.controls.keywords.value;
    this.router.navigate(['search'], {
      queryParams: { keywords: keyword },
    });
  }
}
