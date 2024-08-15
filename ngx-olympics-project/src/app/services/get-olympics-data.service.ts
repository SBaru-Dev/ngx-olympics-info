import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOlympicsDataService {

  constructor(private httpClient: HttpClient) { }

  public getOlympicsData() {
    const url = 'http://localhost:8000/countries';
    return this.httpClient.get(url);
    }
    
  }
