import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { studentInterface } from '../../../shared/sharedContent/entities';
import { HttpClient } from '@angular/common/http';
import { RoutingDB } from '../../../enumRoutesDB';

@Injectable({
  providedIn: 'root'
})
export class StudentsAPIService {

  baseURL : string = "http://localhost:3001" ;

  constructor( private myHTTP : HttpClient ) { }

  getStudents() : Observable<studentInterface[]> {

    return this.myHTTP.get<studentInterface[]>(`${this.baseURL}/${RoutingDB.STUDENTS}`).pipe( delay(7000) )

  }
  
}
