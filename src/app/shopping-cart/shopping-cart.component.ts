import { Component, OnInit, Input } from '@angular/core';
import { product } from '../../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart: Array<product> = [];
  product: product;
  subTotal: number;
  adminCost: number;
  shippingCost: number;
  total: number;

  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.subTotal = 0;
    this.adminCost = 9;
    this.shippingCost = 49;
    this.total = 0;
  }

  

  getSubTotal(): number{
    let sum = 0;
    for(var prod of this.cart){
      sum  += +prod.price;
    }
    this.subTotal = sum;
    return sum;
  }

  getTotal(): number{
    let sum = 0 ;
    sum += (+this.subTotal + +this.adminCost + +this.shippingCost);
    return sum;
  }

  

  
}
