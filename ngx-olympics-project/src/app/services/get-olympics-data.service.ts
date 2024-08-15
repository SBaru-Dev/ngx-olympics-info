import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOlympicsDataService {

  constructor(private httpClient: HttpClient) { }

  public getOlympicsData() {
    String url = '';
    this.httpClient.post(() => {

    })
    
  }
}
