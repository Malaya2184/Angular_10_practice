import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  firstName!: FormControl;
  lastName!: FormControl;
  gender!: FormControl;
  qualification!: FormControl;
  degree=['mba', 'mca', 'bba', 'bca']

  personForm!: FormGroup;
  constructor() { 
    this.createFormControl()
    this.createForm()
  }

  ngOnInit(): void {
  }

  createFormControl(){
    this.firstName = new FormControl();
    this.lastName = new FormControl();
    this.gender = new FormControl();
    this.qualification = new FormControl('mca');
    
  }
  createForm(){
    this.personForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      qualification: this.qualification
    });
    
  }

}
