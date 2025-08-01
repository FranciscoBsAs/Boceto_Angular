import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,  Validators } from '@angular/forms';
import { studentInterface } from '../../shared/sharedContent/entities';

import { averageSup0, firstLetterUpperCaseValidator, onlyLettersValidator } from '../../shared/validatorFunctions/ValidatorFunctions';


@Component({
  selector: 'add-form',
  imports: [ ReactiveFormsModule, CommonModule, ],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})

export class AddForm implements OnInit {

  addStudentForm! : FormGroup ;   // preguntar al profe lo q hace !

  constructor( private myFormBuilder : FormBuilder ) {}

  ngOnInit() {

    this.addStudentForm = this.myFormBuilder.group(
      {
        name: [ '', [ Validators.required, onlyLettersValidator, firstLetterUpperCaseValidator ] ],
        surname: [ '', [ Validators.required, onlyLettersValidator, firstLetterUpperCaseValidator ] ],
        dni: [ '', [  Validators.required, Validators.minLength(7) ] ],
        age: [ '', [ Validators.required ] ],
        average: [ '', [ Validators.required, averageSup0, Validators.max(10) ] ]
      }
    )

  }

  @Output() studentAdded = new EventEmitter<studentInterface>()

  onSubmit() {

    console.log( "Form submited" )

    this.studentAdded.emit( this.addStudentForm.value as studentInterface)

    this.addStudentForm.reset()

  }
  
  handleOnReset() {
    this.addStudentForm.reset() // reset the form to it's initial state
  }


}
