import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interface/products';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  constructor(private productsService: ProductsService) {}
  products: Product[] = [];
  ngOnInit() {
    this.productsService.Get_All_Products().subscribe((data) => {
      this.products = data;
    });
  }

  onDelete = (id: any) => {
    if (confirm('Bạn chắc chứ?')) {
      this.productsService.Remove_Products(id).subscribe((data) => {
        alert('Xóa thành công');
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  };
}
