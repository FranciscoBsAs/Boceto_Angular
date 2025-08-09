import { Component } from '@angular/core';
import { courseInterface } from '../../../../shared/sharedContent/entities';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-view-singular-course',
  imports: [ RouterModule, CommonModule, MatTableModule, MatListModule, MatGridListModule  ],
  templateUrl: './view-singular-course.html',
  styleUrl: './view-singular-course.css'
})

export class ViewSingularCourse {

  aSingularCourse! : courseInterface | undefined ;

  constructor( private theRouter : Router ) {

    const theCurrentNavigation = this.theRouter.getCurrentNavigation() ;

    this.aSingularCourse = theCurrentNavigation?.extras.state?.['courseSelectedToView']

  }


  columnTitlesSingular : string[] = [ 'Name', 'Code', 'Credits' ]

}
