import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interface/products';
import { Category } from '../../../interface/category';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})
export class AddProductsComponent {
  constructor(private productsService: ProductsService ,private categoryService: CategoryService) {}

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    category: new FormControl('',[Validators.required]),
  });
  product: Product[] = [];
  categories: Category[] = [];
  router = new Router()
  async ngOnInit() {
    this.categoryService.Get_Category().subscribe(data=>{
      this.categories = data;
    })
  }
  onAdd = () => {
    this.productsService
      .Add_Product(this.productForm.value as Product)
      .subscribe((data) => {
        this.product.push(data as Product);
      });
    alert('Thêm mới sản phẩm thành công');
    this.router.navigate(['admin/products'])
  };
}
