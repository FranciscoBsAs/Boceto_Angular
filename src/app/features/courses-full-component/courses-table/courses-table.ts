import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { courseInterface } from '../../../../shared/sharedContent/entities';
//import { CoursesFullComponent } from '../courses-full-component';
import { RoutingPaths } from '../../../../shared/urlRoutesEnum';

@Component({
  selector: 'courses-table',
  imports: [ MatTableModule, CommonModule, RouterModule ],
  templateUrl: './courses-table.html',
  styleUrl: './courses-table.css'
})


export class CoursesTable {

  @Input() coursesInTable : courseInterface[] = []

  @Output() deleteCourseEventEmitter : EventEmitter<courseInterface> = new EventEmitter<courseInterface>()
  
  constructor( private theRouter : Router ) {}


  columnTitles : string[] = [ 'Name', 'Code', 'Credits', 'Actions' ]



  // nuevo planteo routing edit

  editCourseFromChild ( certainCourse : courseInterface ) : void {

    this.theRouter.navigate( [ `/${RoutingPaths.EDIT_SINGULAR_COURSE}` ] ,
      {
        state:{ courseSelectedToEdit: certainCourse }
      }
    )

  }



  deleteCourseFromChild ( certainCourse : courseInterface ) {

    this.deleteCourseEventEmitter.emit( certainCourse )

  }


  viewDetailSingularCourseFromChild ( certainCourse : courseInterface ) {

    this.theRouter.navigate( [ `/${RoutingPaths.VIEW_SINGULAR_COURSE}` ] ,
      {
        state: { courseSelectedToView: certainCourse }
      }
    )

  }


}
