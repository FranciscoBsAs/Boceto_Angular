import { Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { studentInterface } from '../../../shared/sharedContent/entities';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RoutingDB } from '../../../enumRoutesDB';
//import { RoutingPaths } from '../../../shared/urlRoutesEnum';

@Injectable({
  providedIn: 'root'
})

export class StudentsAPIService {

  private baseURL : string = RoutingDB.EDPOINT_APIio_DB

  constructor( private myHTTP : HttpClient ) { }
  

  getStudentsThroughMockIO () : Observable<studentInterface[]> {

    return this.myHTTP.get<studentInterface[]>(`${this.baseURL}/${RoutingDB.STUDENTS}`).pipe( delay(4000) )
                      .pipe( catchError( this.handleError ) ) // se agrega la funcionalidad RxJS con handleError

  }
    // return this.myHTTP.get<Observable<studentInterface[]>>(`${this.baseURL}/${RoutingDB.STUDENTS}`).pipe( delay(4000) ) ???


  deleteStudentInDB ( someStudent : studentInterface ) : Observable<void> {

    return this.myHTTP.delete<void>(`${this.baseURL}/${RoutingDB.STUDENTS}/${someStudent.id}`).pipe( delay( 2000 ) ) ;

  }
  

  editStudentInDB ( updatedStudent : studentInterface ) : Observable<studentInterface> {

    return( 
      this.myHTTP.put<studentInterface>(
        `${this.baseURL}/${RoutingDB.STUDENTS}/${updatedStudent.id}`,
        updatedStudent
      )
    )

  }


  addStudentInDB ( newStudent : studentInterface ) : Observable<studentInterface> {

    return this.myHTTP.post<studentInterface>( `${this.baseURL}/${RoutingDB.STUDENTS}`, newStudent )

  }
  



  // nueva handleError clase 5/8

  private handleError ( err : HttpErrorResponse ) : Observable<never> {

    if( err.error instanceof ErrorEvent ) { // ErrorEvent es error tipico de JS

      console.warn( 'Error de Frontend: ', err.error.message )

    }
    else{
      console.warn( `Error de Backend: ${err.status}, cuerpo del error: ${err.message} ` )
    }

    return throwError( 'Error de comunicación HTTP' )

  }

}
