import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskOwnersModel } from './models/taskOwners.model';
import { SkillsModel } from './models/skills.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  items: FormArray;

  panelOpenState = false;
  taskOwnersModels: TaskOwnersModel[] = [
    {ownerType: 'Single', ownerName: 'Single'},
    {ownerType: 'multiple', ownerName: 'Multiple'},
  ];

  skillset: SkillsModel[] = [
    {id: 1, skill: 'Engineering Skill'},
    {id: 2, skill: 'Non Tech Skills'}
  ];
  favoriteIndustry: string;
  industries: string[] = ['Engineering', 'Design', 'Sales'];

  constructor(private formBuilder: FormBuilder) {
  }

  /**
   * Initialization of our forms will be done on ngOnInit lifecycle
   */
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      // owner: ['', Validators.required],
      ownerName: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  /**
   *Submitting the first Form
   */
  submitDOForm() {
    if (!!this.firstFormGroup.valid) {
      alert(JSON.stringify(this.firstFormGroup.value));
    }
  }

  /**
   * TODO: Add multiple ownerName when click on Add People
   * This functionality is ongoing.
   */
  addOwners() {
    console.log('You have Clicked on AddOwners');
    // this.items = this.firstFormGroup.get('ownerName') as FormArray;
    // this.items.push(this.createOwners());
  }

  createOwners() {
    return this.formBuilder.group({ownerName: ''});
  }

  // quesControl() {
  //   if (!!this.firstFormGroup.get('ownerName') && this.firstFormGroup.get('ownerName.ownerName')) {
  //     return (<FormArray> this.firstFormGroup.get('ownerName.ownerName')).controls;
  //   }
  // }
}
