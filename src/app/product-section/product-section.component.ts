import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  @Input() artisanProducts;

  constructor() { }

  ngOnInit(): void {
    console.log(this.artisanProducts);
  }

}
