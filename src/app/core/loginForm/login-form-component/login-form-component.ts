import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSerice } from '../../auth/auth';
import { userInterface } from '../../../../shared/sharedContent/entities';

@Component({
  selector: 'app-login-form-component',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css'
})
export class LoginFormComponent implements OnInit {

  loginForm! : FormGroup

  certainUser! : userInterface | null

  constructor( 
    private myFormBuilder : FormBuilder,
    private authAPI : AuthSerice
  ) { }


  ngOnInit(): void {
    
    this.loginForm = this.myFormBuilder.group(
      {
        userName: [ '', [ Validators.required, Validators.minLength(5)] ],
        password: [ '', [ Validators.required, Validators.minLength(5) ] ]
      }
    )


    this.authAPI.loggedUser$.subscribe( ( us ) => {

      this.certainUser = us

    } )

  }


  onSubmit () {
    if( this.loginForm.valid ) {

      const { userName, password } = this.loginForm.value

      this.authAPI.logIn( userName, password )

    }
    else{
      console.error( 'Login form is invalid' )
    }
  }

}
