import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/products';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // display:boolean = false
  products: Product[] = [];
  async ngOnInit(){
    const {data} = await axios.get('http://localhost:3000/products')
    console.log(data)
    this.products = data;
  }
  hoverP: number | null = null;

  hover(index: number): void {
    this.hoverP = index;
  }

  onhover(): void {
    this.hoverP = null;
  }
}
