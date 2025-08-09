import { Component, EventEmitter, Input, Output } from '@angular/core';
import { studentInterface } from '../../../../shared/sharedContent/entities';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../../../shared/pipes/full-name-pipe';
import { Router, RouterModule } from '@angular/router';
import { RoutingPaths } from '../../../../shared/urlRoutesEnum';
import { MyMatCommonRouterModule } from '../../my-mat-common-router/my-mat-common-router-module';

@Component({
  selector: 'students-table',
  imports: [ MyMatCommonRouterModule, FullNamePipe ],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {

  @Input() studentsInTable : studentInterface[] = []

  @Output() deleteEventEmitt : EventEmitter<studentInterface> = new EventEmitter<studentInterface>()

  constructor( private theRouter : Router ) {}

  columnTitles : string[] = [ 'FullName', 'DNI', 'Age', 'Average', 'Actions' ] 




  viewDetailsOfStudent ( student : studentInterface ) {

    this.theRouter.navigate( [ `/${RoutingPaths.VIEW_SINGULAR_STUDENT}` ],
      {
        state:{ studentSelected: student }
      }  
    )

  }


  deleteStudentFromChild( element: studentInterface ) {

    this.deleteEventEmitt.emit( element )

  }


  // nuevo plateo 21:55

    editStudentFromChild( certainStudent : studentInterface ) : void {
      this.theRouter.navigate( 
        [ `/${RoutingPaths.EDIT_SINGULAR_STUDENT}` ],
        {
          state: {
            studentToEdit: certainStudent
          }
        }
      )
    }


}
