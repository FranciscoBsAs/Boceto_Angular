import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { courseInterface } from '../../../shared/sharedContent/entities';
import { RoutingDB } from '../../../enumRoutesDB';

@Injectable({
  providedIn: 'root'
})

export class CoursesApiService {

  constructor( private myHttp : HttpClient ) { }


  public getCoursesThroughMockIO () : Observable< courseInterface[] > {

    return this.myHttp.get< courseInterface[] >( `${RoutingDB.EDPOINT_APIio_DB}/${RoutingDB.COURSES}` ).pipe( delay(4000) )

  }


  public editStudentInDB ( updatedCourse : courseInterface ) : Observable<courseInterface> {

    return(
      this.myHttp.put<courseInterface>(`${RoutingDB.EDPOINT_APIio_DB}/${RoutingDB.COURSES}/${updatedCourse.id}` ,
        updatedCourse
      )
    )

  } 


  public deleteCourseInDB ( someCourse : courseInterface ) : Observable<void> {

    return this.myHttp.delete<void>( `${RoutingDB.EDPOINT_APIio_DB}/${RoutingDB.COURSES}/${someCourse.id} ` ).pipe( delay( 3000 ) )

  }

}
