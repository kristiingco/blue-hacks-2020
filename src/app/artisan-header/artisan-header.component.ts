import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artisan-header',
  templateUrl: './artisan-header.component.html',
  styleUrls: ['./artisan-header.component.scss']
})
export class ArtisanHeaderComponent implements OnInit {

  @Input() artisanName;
  constructor() { }

  ngOnInit(): void {
  }

}
