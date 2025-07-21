import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { studentInterface } from '../shared/sharedContent/entities';
import { StudentsTable } from './students-table/students-table';
import { AddForm } from './add-form/add-form';

@Component({
  selector: 'app-root',
  imports: [ Toolbar, Navbar, CommonModule, StudentsTable, AddForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {

  protected title = 'angular-coderhouse-project';

  studentsArray : studentInterface[] = []

  constructor( private myHttp : HttpClient ) {}

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

}
