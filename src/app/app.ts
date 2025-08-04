import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { studentInterface } from '../shared/sharedContent/entities';
import { StudentsTable } from './features/students-full-component/students-table/students-table';
import { AddForm } from './add-form/add-form';
import { DeleteForm } from './delete-form/delete-form';
import { EditForm } from "./edit-form/edit-form";

@Component({
  selector: 'app-root',
  imports: [Toolbar, Navbar, CommonModule, RouterModule, StudentsTable, AddForm, DeleteForm, EditForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App   {

  protected title = 'angular-coderhouse-project';

  //studentsArray : studentInterface[] = []

  currentSection : string = 'students-table-section'

  constructor( private myHttp : HttpClient ) {}

  /*
  ngOnInit() : void {
      
    this.myHttp.get<studentInterface[]>( 'AsyncMock/Students.json' ).subscribe( ( theData ) => {
      console.log(theData) ;

      this.studentsArray = theData

    }
    )

  }


  handleAddNewStudent( stu : studentInterface ) {
    
    this.studentsArray = [ ...this.studentsArray, stu ]
    console.log('Adding new student', stu)
  }


  handleDeleteStudent ( id : number ) {

    const updateStudents = this.studentsArray.filter( (st) =>  st.dni !== id  ) ;

    this.studentsArray = [ ...updateStudents ]

  }
  

  handleEditStudent ( editedStudent : studentInterface ) {

    const index = this.studentsArray.findIndex( ( t ) => t.dni === editedStudent.dni )

    if ( index !== -1 ) {
      this.studentsArray[index] = editedStudent
    }
    
  }

  */
}
