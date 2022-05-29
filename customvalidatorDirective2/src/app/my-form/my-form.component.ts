import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { uppercaseValid } from './uppercaseValid.directive';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      firstName :['malaya', [Validators.required, uppercaseValid()]]
    })
  }



}
