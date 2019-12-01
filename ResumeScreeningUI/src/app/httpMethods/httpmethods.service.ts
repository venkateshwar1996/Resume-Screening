import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpMethodsService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  get(url: any, data?: any) {
    return this.http.get(url, data);
  }

  post(url: any, data: any, headers?: HttpHeaders) {
    return this.http.post(url, data, { headers });
  }

  put(url: any, data: any, headers?: HttpHeaders) {
    return this.http.put(url, data, { headers });
  }

  delete(url: any, headers?: HttpHeaders) {
    return this.http.delete(url, { headers });
  }

}
