import { Component, inject } from '@angular/core';
import { Product } from '../../../interface/products';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'] // Ensure this is styleUrls
})
export class ProductDetailComponent {
  product: Product = {} as Product;
  products: Product[] = [];
  route = inject(ActivatedRoute);

  async ngOnInit() {
    const productid = this.route.snapshot.params['id'];

    try {
      const productResponse = await axios.get(`http://localhost:3000/products/${productid}`);
      this.product = productResponse.data;

      const productsResponse = await axios.get(`http://localhost:3000/products`);
      this.products = productsResponse.data;
    } catch (error) {
      console.error(error);
    }
  }

  onChangeImg(url: string) {
    this.product.image = url;
  }
  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   alert('Product added to cart!');
  // }
}
