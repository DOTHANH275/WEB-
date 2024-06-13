import { Component } from '@angular/core';
import { Product } from '../interface/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports :[FormsModule],
})
export class AppComponent {
  products: Product[] = [];
  productAdd = (data: Product) => {
    this.products.push(data);
  };
  onAlert = () => alert('sdafasdfads');
}
