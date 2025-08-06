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

  baseURL : string = "http://localhost:3001" ;

  constructor( private myHTTP : HttpClient ) { }

  /*
  getStudents() : Observable<studentInterface[]> {

    return this.myHTTP.get<studentInterface[]>(`${this.baseURL}/${RoutingDB.STUDENTS}`).pipe( delay(7000) )

  }
  */


  getStudentsThroughMockIO () : Observable<studentInterface[]> {

    return this.myHTTP.get<studentInterface[]>("https://68916597447ff4f11fbc72b6.mockapi.io/students").pipe( delay(4000) )


  }



  deleteStudentInDB ( someStudent : studentInterface ) : Observable<void> {

    //const idInString = String(someStudent.id)

    //console.log(idInString)

    return this.myHTTP.delete<void>(`https://68916597447ff4f11fbc72b6.mockapi.io/students/${someStudent.id}`).pipe( delay( 2000 ) ) ;
                                  //https://68916597447ff4f11fbc72b6.mockapi.io/mockIOdbAPI/students

  }
  


  /*

  editStudentInDB ( updatedStudent : studentInterface ) : Observable<studentInterface> {

    return this.myHTTP.put<studentInterface>(
      `https://68916597447ff4f11fbc72b6.mockapi.io/students/${updatedStudent.id}`,
      updatedStudent
    )

  }
  */

}
