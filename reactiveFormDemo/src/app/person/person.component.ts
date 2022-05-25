import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import {Person} from './person'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  firstName!: FormControl;
  changedArr: string[]=[]
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
    // // for every time value change
    // this.firstName.valueChanges.subscribe(change => {
    //   this.changedArr.push(change)
    // })

    // //for when you stop typing
    // this.firstName.valueChanges.pipe(debounceTime(500)).subscribe(change => {
    //   this.changedArr.push(change)
    // })

    // distinct untill changed
    this.firstName.valueChanges.pipe(debounceTime(500)).pipe(distinctUntilChanged()).subscribe(change => {
      this.changedArr.push(change)
    })
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
    this.personForm.reset();
    
    
  }

}
