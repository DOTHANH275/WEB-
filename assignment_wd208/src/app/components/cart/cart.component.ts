import { Component } from '@angular/core';
import { Product } from '../../../interface/products';
import axios from 'axios';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  product: Product[] = [];
  async ngOnInit() {
    const { data } = await axios.get(' http://localhost:3000/products');
    this.product = data
  }
}
