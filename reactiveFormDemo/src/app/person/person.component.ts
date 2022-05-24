import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  email!: FormControl;
  degree=['mba', 'mca', 'bba', 'bca']

  personForm!: FormGroup;

  person!: Person;

  ngOnInit(): void {
    this.createFormControl()
    this.createForm()

    this.person = new Person("malaya", "swain", "male", "mba", "abc@gmail.com");
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
      qualification: this.person.qualification,
      email: this.person.email
    })
  }

  createFormControl(){
    this.firstName = new FormControl(this.firstName,[Validators.required, Validators.pattern('[a-zA-Z ]+')]);
    this.lastName = new FormControl();
    this.email = new FormControl(this.email,[Validators.required,Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
    this.gender = new FormControl();
    this.qualification = new FormControl();
    
  }
  createForm(){
    this.personForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      qualification: this.qualification,
      email: this.email
    });
    
  }
  submitdata(){
    alert(JSON.stringify(this.personForm.value));
    console.log(this.personForm.get('firstName')?.value);
    
    
  }

}
