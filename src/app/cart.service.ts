import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../product';

@Injectable()
export class CartService {

  private cart = [];
  
  

  constructor() { }

  addItemToCart(p: product){
    let found = false;
    //check if item is in cart already and increase quantity instead
    for(var prod of this.cart){
      console.log(p);
      console.log(prod);
      if(prod.productID == p.productID){
        prod.qty_ordered++;
        found = true;
      }
    }
    if(!found) this.cart.push(p);
  }

  getCart(){
    return this.cart;
  }

}