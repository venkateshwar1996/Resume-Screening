import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }
  Get(url:any, headers?:HttpHeaders)
  {
    return this.http.get(url,{headers:headers});
  }
  Post(url: any, data: any, headers: HttpHeaders) {
    console.log(data);
    return this.http.post(url,data,{headers:headers});
  }
  Put(url: any, data: any, headers:HttpHeaders)
  {
    return this.http.put(url,data,{headers:headers});
  }
  Delete(url: any, data: any, headers:HttpHeaders)
  {
    console.log(url);
    return this.http.delete(url,{headers:headers});
  }
}
