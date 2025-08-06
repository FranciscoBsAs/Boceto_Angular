import { Component, OnInit } from '@angular/core';
import { StudentsAPIService } from './students-api-service';
import { studentInterface } from '../../../shared/sharedContent/entities';
import { CommonModule } from '@angular/common';
import { CdkNoDataRow } from "@angular/cdk/table";
import { StudentsTable } from "./students-table/students-table";
import { RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-students-full-component',
  imports: [CommonModule, StudentsTable, RouterModule],
  templateUrl: './students-full-component.html',
  styleUrl: './students-full-component.css'
})
export class StudentsFullComponent implements OnInit {

  constructor( private studentsAPI : StudentsAPIService ) {}

  studentsArray! : studentInterface[]

  ngOnInit() : void {
    this.studentsAPI.getStudentsThroughMockIO().subscribe( ( studentsFromDB ) => {

      console.table( studentsFromDB )

      this.studentsArray = studentsFromDB

    } )
  }


  handleDeleteStudent( studentToDelete : studentInterface ) : void {

    console.log( "Eliminado alumno", studentToDelete); console.table( studentToDelete );

    /*
    this.studentsAPI.deleteStudentInDB( studentToDelete ).subscribe( () : void => {

      this.studentsAPI.getStudentsWithMockIO().subscribe( ( studentsUpadatedArray : studentInterface[] ) : void => {
        this.studentsArray = studentsUpadatedArray
      } )

    }
    );
    */
    




    this.studentsAPI.deleteStudentInDB( studentToDelete ).pipe(

      switchMap( () : Observable<studentInterface[]> => this.studentsAPI.getStudentsThroughMockIO() )

      /*
      switchMap( function( this : any ) : Observable<studentInterface[]> {
         return  this.studentsAPI.getStudentsThroughMockIO()  }.bind(this)
      )
      */

    ).subscribe( ( updatedStudentsArray : studentInterface[] ) => {
      
      this.studentsArray = updatedStudentsArray

    } )

  }


  handleEditStudent ( editedStudent : studentInterface ) {

    const index = this.studentsArray.findIndex( ( t ) => t.id === editedStudent.id )

    if ( index !== -1 ) {
      this.studentsArray[index] = editedStudent
    }
    
  }

}
 