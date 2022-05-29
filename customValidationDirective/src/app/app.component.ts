import { Component, OnInit } from '@angular/core';
import { uppercaseValidator } from './uppercase.validator';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customValidationDirective';

  constructor(private fb: FormBuilder){

  }
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm=this.fb.group({

      myName : ['',[new uppercaseValidator()]]

    })
  }
 

  


}
