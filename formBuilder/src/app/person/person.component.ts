import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from './../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personForm!: FormGroup;
  degrees = ['mba', 'mca', 'bca', 'bba']
  person!: Person;
  firstNameChange: string[]=[]

  //this below line is called service injection to the constructor
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.person = new Person('malaya kumar','swain','male', 'mca')
    this.personForm = this.fb.group({
      firstName: [this.person.firstName,[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      lastName: [this.person.lastName,[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      gender: [this.person.gender],
      degree: [this.person.degree]
    })
    this.personForm.controls['firstName'].valueChanges.subscribe(change =>{
      this.firstNameChange.push(change)
    })
  }



}
