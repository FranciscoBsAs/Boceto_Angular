import { TestBed } from "@angular/core/testing";

import { StudentsAPIService } from "./students-api-service";
import { Observable } from "rxjs";
import { studentInterface } from "../../../shared/sharedContent/entities";

describe( 'StudentsApiService', () => {

    let service : StudentsAPIService ;

    beforeEach( () => {
        TestBed.configureTestingModule( { } )
        service = TestBed.inject( StudentsAPIService )
    } )

    it( 'should be created', () => {
        expect(service).toBeTruthy()
    } );


    // EJemplo de clase 12/8

    fit( 'deberia retornar cierta lista de estudiantes', () => {

        const theStudents : Observable<studentInterface[]> = service.getStudentsThroughMockIO()

        //expect(theStudents.length).toBe(3);

        expect(theStudents)

    } )


} )