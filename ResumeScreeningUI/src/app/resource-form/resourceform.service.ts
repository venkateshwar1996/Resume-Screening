import { Injectable } from '@angular/core';
import { HttpMethodsService } from '../httpMethods/httpmethods.service';

@Injectable({
  providedIn: 'root'
})

export class ResourceformService {

  constructor(private httpMethods: HttpMethodsService) { }

  getLocation(locationUrl: any) {
    const url = this.httpMethods.baseUrl + locationUrl;
    return this.httpMethods.get(url);
  }

  getSkillSet(skillSetUrl: any) {
    const url = this.httpMethods.baseUrl + skillSetUrl;
    return this.httpMethods.get(url);
  }

  getRequireSkillSet(reqSkillUrl: any){
    const url = this.httpMethods.baseUrl+reqSkillUrl;
    return this.httpMethods.get(url);
  }

  getClient(clientUrl: any){
    const url = this.httpMethods.baseUrl+clientUrl;
    return this.httpMethods.get(url);
  }
}
