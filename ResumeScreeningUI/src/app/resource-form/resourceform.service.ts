import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceformService {
  baseUrl = environment.baseUrl

  constructor(private genericService: GenericService) { }

  getLocation() {
    let url = this.baseUrl + environment.getLocation;
    return this.genericService.Get(url);
  }
  getSkillSet(){
    let url = this.baseUrl+environment.getSkillSet;
    return this.genericService.Get(url);
  }
}
