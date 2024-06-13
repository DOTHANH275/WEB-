import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000/products';

  Add_Product = (data: Product) => {
    return this.http.post(this.API_URL, data);
  };
  Get_All_Products = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };
  Get_Products_By_Id = (id: string): Observable<any> => {
    return this.http.get(this.API_URL + '/' + id);
  };
  Remove_Products = (id: string): Observable<any> => {
    return this.http.delete(this.API_URL + '/' + id);
  };
  Edit_Products = (id: string, data: Product): Observable<any> => {
    return this.http.put(this.API_URL + '/' + id, data);
  };
}
