import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOlympicsDataService {

  constructor(private httpClient: HttpClient) { }

  public getOlympicsData() {
    const url = 'http://localhost:3000/countries';
    return this.httpClient.get(url);
    }
    
    public updateOlympicsData(req: any) {
      const url = 'https://localhost:3000/countries';
      return this.httpClient.post(url, req);
    }
  }
