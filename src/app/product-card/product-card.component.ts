import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productTitle;
  @Input() productPrice;
  @Input() productImageURL;
  @Input() productId;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts(this.productId).subscribe((data: any[]) => {
      this.productTitle = data['product_name'];
      this.productPrice = data['product_price'];
      this.productImageURL = data['product_image_url'];
    console.log(data);
    
  });

}

}
