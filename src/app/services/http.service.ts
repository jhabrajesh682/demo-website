import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private masterApiUrl;

  private baseV1 = 'v1/';

  constructor(private _http: HttpClient) {
    this.masterApiUrl = '';
  }

  private getHeaderWithoutToken() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return httpOptions;
  }
}
