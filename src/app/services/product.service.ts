import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
// p
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<IGetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface IGetResponse{
  _embedded: {
    products: Product[];
  }
}