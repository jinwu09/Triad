import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private link = 'http://localhost/triad/';
  
  constructor(private httpClient: HttpClient) {
    console.log("Service is Running");
  }

  request(endpoint: any, data: any){
    return this.httpClient.post(this.link + endpoint, JSON.stringify(data))
  }
}
