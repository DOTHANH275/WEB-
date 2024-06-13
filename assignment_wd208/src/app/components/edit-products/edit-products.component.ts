import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Product } from '../../../interface/products';
import { Category } from '../../../interface/category';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css',
})
export class EditProductsComponent {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });
  productID = this.route.snapshot.params['id'];
  ngOnInit() {
    this.productsService
      .Get_Products_By_Id(this.productID)
      .subscribe((data) => {
        console.log(data);
        this.productForm.controls.name.setValue(data.name);
        this.productForm.controls.price.setValue(data.price);
        this.productForm.controls.image.setValue(data.image);
        this.productForm.controls.description.setValue(data.description);
      });
  }
  router = new Router();
  onSubmit = () => {
    this.productsService
      .Edit_Products(this.productID, this.productForm.value as Product)
      .subscribe((data) => {
        alert('Cập nhật thành công');
        this.router.navigate(['admin/products']);
      });
  };
}
