import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../category.service';
import { Category } from '../../../interface/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryForm = new FormGroup({
    name: new FormControl('')
  })
  constructor(private categoryService: CategoryService){}
  category : Category[]=[]
  onAdd = ()=>{
      this.categoryService.Add_Category(this.categoryForm.value as Category).subscribe(data=>{
        this.category.push(data as Category)
      })
      alert("Thêm mới danh mục thành công")
  }
}
