import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artisan-description',
  templateUrl: './artisan-description.component.html',
  styleUrls: ['./artisan-description.component.scss']
})
export class ArtisanDescriptionComponent implements OnInit {

  @Input() artisanDescription;
  
  constructor() { }

  ngOnInit(): void {
  }

}
