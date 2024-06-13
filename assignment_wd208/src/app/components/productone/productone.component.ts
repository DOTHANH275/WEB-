import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/products';

@Component({
  selector: 'app-productone',
  templateUrl: './productone.component.html',
  styleUrl: './productone.component.css',
})
export class ProductoneComponent {
  @Input() productone: Product = {} as Product;
}
