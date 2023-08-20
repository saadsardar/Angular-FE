import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(page: number, perPage: number) {
    return this.http.get(`${this.baseUrl}/product?page=${page}&?perPage=${perPage}`);
  }

  getProduct(id: string) {
    return this.http.get(`${this.baseUrl}/product/${id}`);
  }

  searchProducts(searchQuery: string) {
    return this.http.get(`${this.baseUrl}/product/search?query=${searchQuery}`);
  }
}
