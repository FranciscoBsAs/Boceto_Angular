import { Component, OnInit } from '@angular/core';
import { StudentsAPIService } from './students-api-service';
import { studentInterface } from '../../../shared/sharedContent/entities';
import { CommonModule } from '@angular/common';
import { CdkNoDataRow } from "@angular/cdk/table";
import { StudentsTable } from "./students-table/students-table";
import { RouterModule } from '@angular/router';

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
    this.studentsAPI.getStudents().subscribe( ( sts ) => {

      console.table( sts )

      this.studentsArray = sts

    } )
  }

}
 