import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';
import { Suggestion } from '../utilities/apiModels/suggestion';
import {Urls} from '../utilities/apiUrls';
import { Proficiency } from '../utilities/apiModels/proficiency';
import { SkillSet } from '../utilities/apiModels/skill-set';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
SelectedSkillSet;
SelectedProficiency;
SelectedFlag;
selectedSuggestion;
masterSuggestions: Suggestion[];
suggestions: Suggestion[];
proficiencies: Proficiency[];
skillSets: SkillSet[];
filters: string[] = ["Skill","Expertise"]
  constructor(private service:InfoService) { }

  ngOnInit() {
    this.service.getSuggestion(Urls.getSuggestion).subscribe((response: any)=>{
      if(response)
      {
        this.suggestions = response;
        this.masterSuggestions = response;
      }
    });
    this.service.getProficiency(Urls.getProficiency).subscribe((response: any)=>{
      if(response)
      {
        this.proficiencies = response;
      }
    });
    this.service.getSkillSet(Urls.getSkillSet).subscribe((response: any)=>{
      if(response)
      {
        console.log(response);
        this.skillSets = response;
      }
    })
  }
  selected(): void {
     console.log(this.SelectedSkillSet);
     console.log(this.SelectedFlag);
     console.log(this.SelectedProficiency);
    let tempSuggestions = this.masterSuggestions;
    if(this.SelectedSkillSet)
    {
    tempSuggestions = this.masterSuggestions.filter(x=>x.SkillSetID === this.SelectedSkillSet);
    }
    if(this.SelectedProficiency)
    {
      tempSuggestions = tempSuggestions.filter(x=>x.ProficiencyID === this.SelectedProficiency);
    }
    if(this.SelectedFlag)
    {
      if(this.SelectedFlag === "Skill")
      {
        tempSuggestions = tempSuggestions.filter(x=>x.IsSkill === true);
      }
      else{
        tempSuggestions = tempSuggestions.filter(x=>x.IsSkill === false);
      }
    }
    this.suggestions = tempSuggestions;
  }
}
