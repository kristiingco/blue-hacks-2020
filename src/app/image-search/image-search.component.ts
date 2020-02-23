import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {

  loading: boolean;
  questionUrl1 = 'http://localhost:3000/api/products';
  questionUrl2 = 'http://localhost:3000/api/compareImageList';
  images = [];
  ids = [];
  inputControl = new FormControl('');
  outputControl = new FormControl('');
  inputValue;
  outputUrl = null;
  outputId = null;
  clicked = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllProducts().subscribe((data: any[]) => {
      
      for (let i = 0; i < data.length; i++) {
        this.images.push((data[i]['product_image_url']));
        this.ids.push(data[i]['product_id']);
      }
  });
}

onClick(event) {
  this.inputValue = this.inputControl.value;
  this.clicked = true;
  this.getNearestNeighbors().subscribe((data: any[]) => {
    this.outputUrl = data['image_id'];
    this.outputId = data['product_id'];
    this.outputControl.setValue(this.outputUrl);
    console.log(this.outputUrl);
});

}

getAllProducts() {
  return this.httpClient.get(this.questionUrl1);
}

getNearestNeighbors() {
  console.log(this.questionUrl2 + "?image="+ this.inputValue +"&image_list=" + this.images + "&product_id_list=" + this.ids);
  return this.httpClient.get(this.questionUrl2 + "?image="+ this.inputValue +"&image_list=" + this.images + "&product_id_list=" + this.ids);
}


}
