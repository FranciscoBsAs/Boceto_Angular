import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { studentInterface } from '../../shared/sharedContent/entities';
import { averageSup0 } from '../add-form/add-form';
import { MatSnackBar } from '@angular/material/snack-bar'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'edit-form',
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.css'
})

export class EditForm implements OnInit {

  editStudentForm! : FormGroup ;

  @Input() theStudentSearchEngine : studentInterface[] = []

  @Output() studentEdited : EventEmitter<studentInterface> = new EventEmitter<studentInterface>()

  dniBuscar! : number

  private _myEditorSnackBar = inject( MatSnackBar )

  constructor( private myFormBuilder : FormBuilder ) {}

  ngOnInit(): void {
      this.editStudentForm = this.myFormBuilder.group(
        {
          dni: ['', [Validators.required]],
          name: ['', [Validators.required, ]],
          surname: ['', [Validators.required,]],
          age: ['', [Validators.required, Validators.min(1)]],
          average: ['', [Validators.required, averageSup0, Validators.max(10)]],
        }
      )
  }

  onSubmit() {

    if ( this.editStudentForm.valid ) {
      this.studentEdited.emit( this.editStudentForm.value )
      this.editStudentForm.reset()

      this.showSuccesEdit_SnackBar()
    }

  }

  handleOnReset() {
    this.editStudentForm.reset()
  }


  searchStudentByDNI () {

    const studentSearched = this.theStudentSearchEngine.find ( (s) => s.dni === this.dniBuscar )
      
      if(studentSearched) {
        this.editStudentForm.patchValue( studentSearched ) 
      }
      else{
        this.showNotFound_SnackBar()
      }

  }

  showSuccesEdit_SnackBar() {
    const message = 'Estudiante editado correctamente'
    const action = 'Cerrar'
    
    this._myEditorSnackBar.open( message, action )
  }


  showNotFound_SnackBar () {

    const messageNotFound = 'Estudiante no encontrado'
    const actionNotFound = 'Cerrar'

    this._myEditorSnackBar.open( messageNotFound, actionNotFound ) 
  }

}
