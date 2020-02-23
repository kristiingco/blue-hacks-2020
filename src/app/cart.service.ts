import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../product';

@Injectable()
export class CartService {

  private cart = [];
  
  

  constructor() { }

  addItemToCart(p: product){
    this.cart.push(p);
  }

  getCart(){
    return this.cart;
  }

}