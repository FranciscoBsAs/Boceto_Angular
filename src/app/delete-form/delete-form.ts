import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'delete-form',
  imports: [ ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  templateUrl: './delete-form.html',
  styleUrl: './delete-form.css'
})
export class DeleteForm implements OnInit {

  deleteStudentForm! : FormGroup

  private _mySnackBar = inject( MatSnackBar )

  constructor( private myFormBuilder : FormBuilder ) {}


  ngOnInit() : void {
      this.deleteStudentForm = this.myFormBuilder.group(
        {
          dni: [ '', Validators.required ],
          description: [ '', Validators.required ]
        }
      )
  }


  @Output() studentDeleteFromChild : EventEmitter<number> = new EventEmitter<number>()

  onDeleteStudent() : number | void {
    console.log('Delete Form submitted:', this.deleteStudentForm.valid);

    if( this.deleteStudentForm.valid ) {

      this.showSuccesDelete_SnackBar()

      const { dni } = this.deleteStudentForm.value

      this.studentDeleteFromChild.emit( dni )

    }
  }

  showSuccesDelete_SnackBar() {
    const message = 'Estudiante eliminado'
    const action = 'Cerrar'
    
    this._mySnackBar.open( message, action )
  }

  handleOnReset() {
    this.deleteStudentForm.reset()

    // reset the form to it's initial state
  }

}
