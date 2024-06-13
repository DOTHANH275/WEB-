import { Component } from '@angular/core';
import { Product } from '../../../interface/products';
import { SearchService } from '../../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrl: './seach.component.css',
})
export class SeachComponent {
  productSearch: Product[] = [];
  keywords: string = '';

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.keywords = this.route.snapshot.queryParams['keywords'];
    console.log(this.keywords);

    if (this.keywords) {
      this.searchService.SearchKeyword(this.keywords).subscribe(
        (data: Product[]) => {
          this.productSearch = data;
        },
        (error) => {
          console.error('Error fetching search results', error);
        }
      );
    }
  }
}
