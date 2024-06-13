import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/products';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  SearchKeyword(keywords: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}?name_like=${keywords}`);
  }
}
