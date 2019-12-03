import { Injectable } from '@angular/core';
import {HttpMethodsService} from '../httpMethods/httpmethods.service';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpMethods: HttpMethodsService) { }  
  getProficiency(proficiencyUrl: any){
    const url = this.httpMethods.baseUrl + proficiencyUrl;
    return this,this.httpMethods.get(url);
  }
  getSuggestion(suggestionUrl: any){
    const url = this.httpMethods.baseUrl + suggestionUrl;
    return this,this.httpMethods.get(url);
  }
  getSkillSet(skillSetUrl: any){
    const url = this.httpMethods.baseUrl+skillSetUrl;
    return this,this.httpMethods.get(url);
  }
}
