import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanServiceService } from '../artisan-service.service';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {

  id;
  constructor(private _Activatedroute: ActivatedRoute, private artisanService: ArtisanServiceService) { }

  artisanName;
  artisanDescription;
  artisanProducts;
  artisanImage;

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
    this.artisanService.getArtisan(this.id).subscribe((data: any[]) => {
    this.artisanName = data['artisan_name'];
    this.artisanDescription = data['artisan_description'];
    this.artisanImage= data['artisan_image_url'];
  });

    this.artisanService.getArtisanProducts(this.id).subscribe((data: any[]) => {
    console.log(data);
    this.artisanProducts = data;
  });

  }

}
