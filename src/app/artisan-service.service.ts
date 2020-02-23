import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtisanServiceService {

  questionUrl1 = 'http://localhost:3000/api/artisanById';
  questionUrl2 = 'http://localhost:3000/api/productByArtisan';

  constructor(private httpClient: HttpClient) { }

  public getArtisan(id) {
    return this.httpClient.get(this.questionUrl1 + '?artisan_id=' + id);
  }

  public getArtisanProducts(id) {
    return this.httpClient.get(this.questionUrl2 + '?artisan_id=' + id);
  }
}
