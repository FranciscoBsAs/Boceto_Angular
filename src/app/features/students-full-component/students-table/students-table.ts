import { Component, Input } from '@angular/core';
import { studentInterface } from '../../../../shared/sharedContent/entities';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../../../shared/pipes/full-name-pipe';
import { Router, RouterModule } from '@angular/router';
import { RoutingPaths } from '../../../../shared/urlRoutesEnum';

@Component({
  selector: 'students-table',
  imports: [ MatTableModule, CommonModule, FullNamePipe, RouterModule ],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {

  @Input() studentsInTable : studentInterface[] = []

  constructor( private theRouter : Router ) {}

  columnTitles : string[] = [ 'FullName', 'DNI', 'Age', 'Average', 'Actions' ] 




  viewDetailsOfStudent ( student : studentInterface ) {

    this.theRouter.navigate( [ `/${RoutingPaths.VIEW_SINGULAR_STUDENT}` ],
      {
        state:{ studentSelected: student }
      }  
    )

  }

}
