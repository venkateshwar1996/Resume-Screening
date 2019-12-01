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
    const url = this.httpMethods + skillSetUrl;
    return this.httpMethods.get(url);
  }

}
