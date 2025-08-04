import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RoutingPaths } from '../shared/urlRoutesEnum';
import { StudentsFullComponent } from './features/students-full-component/students-full-component';
import { ViewSingularStudent } from './features/students-full-component/view-singular-student/view-singular-student';

export const routes : Routes = [

    {
        path: '',
        component: StudentsFullComponent,
        /*

        */
    },
    {
        path: RoutingPaths.STUDENTS,
        loadComponent: function () { 
            return(
                import( './features/students-full-component/students-full-component')
                    .then(
                        function( module ) {
                            return module.StudentsFullComponent
                        }
                    )
            )
        }
    },
    {
        path: RoutingPaths.COURSES ,
        loadComponent: () => import( './features/courses-full-component/courses-full-component').then( ( module ) => module.CoursesFullComponent )
    },
    {
        path: RoutingPaths.REGISTRATIONS,
        loadComponent: () => import( './features/registrations-full-component/registrations-full-component' ).then( (module) => module.RegistrationsFullComponent )
    },
    {
        path: RoutingPaths.VIEW_SINGULAR_STUDENT,
        //component: ViewSingularStudent
        loadComponent: () => import( './features/students-full-component/view-singular-student/view-singular-student').then( (module) => module.ViewSingularStudent )
    }

];
