import { Component, Input, Output } from '@angular/core';
import { Product } from '../../../interface/products';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  products: Product[] = [];


 async ngOnInit(){
      const {data}  = await axios.get('http://localhost:3000/products')
      this.products= data
  }


}
