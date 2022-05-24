import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Person} from './person'


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

  person!: Person;

  ngOnInit(): void {
    this.createFormControl()
    this.createForm()

    this.person = new Person("malaya", "swain", "male", "mba");
  //   this.personForm.setValue({
  //     firstName: this.person.firstName,
  //     lastName: this.person.lastName,
  //     gender: this.person.gender,
  //     qualification: this.person.qualification
  //   })
  // }
    this.personForm.patchValue({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      gender: this.person.gender,
      qualification: this.person.qualification
    })
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
  submitdata(){
    alert(JSON.stringify(this.personForm.value));
    console.log(this.personForm.get('firstName')?.value);
    
    
  }

}
