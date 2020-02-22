import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtisanServiceService {

  questionUrl = 'http://localhost:3000/api/artisanById';

  constructor(private httpClient: HttpClient) { }

  public getArtisan(id) {
    return this.httpClient.get(this.questionUrl + '?artisan_id=' + id);
  }
}
