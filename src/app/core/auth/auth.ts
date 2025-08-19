import { Injectable } from '@angular/core';
import { userInterface } from '../../../shared/sharedContent/entities';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSerice {

  constructor() { }

  private usersData = [
    {
      username: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      username: 'user',
      password: 'user',
      role: 'user'
    }
  ]
  // has to be a subject, notify that it changed
  //loggedUser! : userInterface

  private loggedUserSubject = new BehaviorSubject<userInterface | null >(null)
  loggedUser$ = this.loggedUserSubject.asObservable()

  logIn ( username : string, password : string ) : boolean {

    // check if its admin or common user

    const certainUser = this.usersData.find( (u) => u.username === username && u.password === password )
    
    //return certainUser !== undefined

    if( certainUser ) {
      this.loggedUserSubject.next( 
        {
          userName: certainUser.username,
          role: certainUser.role
        }
      )
      return true
    }

    return false
  
  }

  /*
  getLoggedUser () : userInterface {
    return this.loggedUserSubject
  }
  */


  // check if its admin

  isAdmin () : boolean {

    // implement your logic to check if the user is and admin

    const user = this.usersData.find( (u) => u.username === 'admin' )

    return true
  }

}
