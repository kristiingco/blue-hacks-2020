import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { product } from '../../product';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  currentProduct: product = new product();

  constructor(private _Activatedroute: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.currentProduct.productID = +params.get('id');
      console.log(this.currentProduct.productID);
  });

  this.productService.getProducts(this.currentProduct.productID).subscribe((data: any[]) => {
    this.currentProduct.name = data['product_name'];
    this.currentProduct.price = data['product_price'];
    this.currentProduct.description = data['product_description'];
    this.currentProduct.img_url = data['product_image_url'];
  });
  }

  addItem(){
    this.currentProduct.qty_ordered++;
    this.cartService.addItemToCart(this.currentProduct);
  }

}
