import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { studentInterface } from '../../../shared/sharedContent/entities';
import { HttpClient } from '@angular/common/http';
import { RoutingDB } from '../../../enumRoutesDB';
//import { RoutingPaths } from '../../../shared/urlRoutesEnum';

@Injectable({
  providedIn: 'root'
})

export class StudentsAPIService {

  //baseURL : string = "http://localhost:3001" ;

  constructor( private myHTTP : HttpClient ) { }
  

  getStudentsThroughMockIO () : Observable<studentInterface[]> {

    return this.myHTTP.get<studentInterface[]>(`${RoutingDB.EDPOINT_APIio_DB}/${RoutingDB.STUDENTS}`).pipe( delay(4000) )

  }



  deleteStudentInDB ( someStudent : studentInterface ) : Observable<void> {

    return this.myHTTP.delete<void>(`${RoutingDB.EDPOINT_APIio_DB}/${RoutingDB.STUDENTS}/${someStudent.id}`).pipe( delay( 2000 ) ) ;

  }
  


  editStudentInDB ( updatedStudent : studentInterface ) : Observable<studentInterface> {

    return( 
      this.myHTTP.put<studentInterface>(
        `${RoutingDB.EDPOINT_APIio_DB}/${RoutingDB.STUDENTS}/${updatedStudent.id}`,
        updatedStudent
      )
    )

  }
  

}
