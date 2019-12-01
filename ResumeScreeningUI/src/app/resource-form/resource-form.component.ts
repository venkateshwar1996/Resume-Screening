import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArrayName, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { ResourceformService } from './resourceform.service';
import { Location } from '../utilities/apiModels/location';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})

export class ResourceFormComponent implements OnInit {
  employeeInfoForm: any;
  visible = true;
  requiredSkillSelectable = true;
  requiredSkillRemovable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredRequiredSkills: Observable<string[]>;
  requiredSkill: string[] = [];
  allSkills: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  requiredSkillSet = new FormControl();

  @ViewChild('requiredSkillInput', { static: false }) requiredSkillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto1', { static: false }) matAutocomplete1: MatAutocomplete;

  expertiseForm: FormGroup;
  expertiseArray: {
    id: number;
  }[];
  locations: Location[];

  constructor(private fb: FormBuilder, private service: ResourceformService) {
    this.filteredRequiredSkills = this.requiredSkillSet.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) => skill ? this._filter(skill) : this.allSkills.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add skill only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete1.isOpen) {
      const input = event.input;
      const value = event.value;
      // Add our skill
      if ((value || '').trim()) {
        this.requiredSkill.push(value.trim());
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.requiredSkillSet.setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.requiredSkill.push(event.option.viewValue);
    this.requiredSkillInput.nativeElement.value = '';
    this.requiredSkillSet.setValue(null);
  }


  remove(skill: string): void {
    const index = this.requiredSkill.indexOf(skill);
    if (index >= 0) {
      this.requiredSkill.splice(index, 1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSkills.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    // this.expertiseArray = [{ id: 1 }, { id: 2 }];
    // this.service.getLocation(Urls.getLocation).subscribe((data: any) => {
    //   if (data) {
    //     this.locations = data;
    //   }
    // });
    // this.service.getSkillSet(Urls.getSkillSet).subscribe((response: any) => {
    //   if (response) {
    //     this.skillSets = response;
    //   }
    // });

    this.createForm();
  }

  createForm() {
    this.employeeInfoForm = this.fb.group({
      name: [null],
      employeeID: [null],
      location: [null],
      experience: [null],
      clientName: [null],
      actualSkillSet: [null],
      expertiseSummary: [null],
      highestDegree: [null],
      collegeName: [null],
      expertiseRows: this.fb.array([this.initExpertiseRows()]),
      projectDetailRows: this.fb.array([this.initProjectDetailRows()])
    });
  }

  initExpertiseRows() {
    return this.fb.group(
      {
        expertiseArea: [null]
      }
    );
  }

  initProjectDetailRows() {
    return this.fb.group(
      {
        client: [null],
        technologiesUsed: [null],
        description: [null],
        clientDescription: [null],
        responsibilites: [null]
      }
    );
  }

  addExpertiseRows() {
    const control = this.employeeInfoForm.controls.expertiseRows as FormArray;
    control.push(this.initExpertiseRows());
  }

  deleteExpertiseRows(index: number) {
    const control = this.employeeInfoForm.controls.expertiseRows as FormArray;
    control.removeAt(index);
  }

  addProjectDetailsRows() {
    const control = this.employeeInfoForm.controls.projectDetailRows as FormArray;
    control.push(this.initProjectDetailRows());
  }

  deleteProjectDetailsRows(index: number) {
    const control = this.employeeInfoForm.controls.projectDetailRows as FormArray;
    control.removeAt(index);
  }

}
