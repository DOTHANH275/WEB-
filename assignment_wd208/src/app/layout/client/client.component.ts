import { Component } from '@angular/core';
import { Product } from '../../../interface/products';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  products: Product[] = [];

}
