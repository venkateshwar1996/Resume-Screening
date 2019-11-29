import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray} from '@angular/forms';
import { Location } from '../Classes/location';
import { SkillSet } from '../Classes/skill-set' ;
import { ResourceformService } from './resourceform.service';

export interface Location{
  value:string
}

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {
  expertiseForm: FormGroup;
  expertiseArray:{
    id:number;
  }[];
  locations: Location[];
  skillSets: SkillSet[];
  constructor(private _formBuilder: FormBuilder, private service: ResourceformService) {
    this.expertiseForm = this._formBuilder.group({ expertiselist : this._formBuilder.array([])})
   }

  ngOnInit() {
    this.expertiseArray = [{ id:1},{id:2}];
    this.service.getLocation().subscribe((data:Location[])=>{
      this.locations = data;
      console.log(data);
    })
    this.service.getSkillSet().subscribe((data:SkillSet[])=>{
      this.skillSets = data;
      console.log(data);
    })
  }
}
