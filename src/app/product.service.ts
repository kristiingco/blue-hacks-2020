import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  questionUrl1 = 'http://localhost:3000/api/productById';

  constructor(private httpClient: HttpClient) { }

  public getProducts(id) {
    return this.httpClient.get(this.questionUrl1 + '?product_id=' + id);
  }
}
