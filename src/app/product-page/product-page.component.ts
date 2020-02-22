import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  id;
  productTitle;
  productPrice;
  productDescription;
  productImageUrl;

  constructor(private _Activatedroute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
  });

  this.productService.getProducts(this.id).subscribe((data: any[]) => {
    this.productTitle = data['product_name'];
    this.productPrice = data['product_price'];
    this.productDescription = data['product_description'];
    this.productImageUrl = data['product_image_url'];
  });
  }

}
