import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interface/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000/categories';

  Add_Category = (data: Category): Observable<any> => {
    return this.http.post(this.API_URL, data);
  };
  Get_Category = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };
}
