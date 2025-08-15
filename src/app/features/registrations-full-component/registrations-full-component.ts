import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyMatCommonRouterModule } from '../my-mat-common-router/my-mat-common-router-module';
import { studentInterface } from '../../../shared/sharedContent/entities';
import { StudentsAPIService } from '../students-full-component/students-api-service';
import { averageSup0, firstLetterUpperCaseValidator, onlyLettersValidator } from '../../../shared/validatorFunctions/ValidatorFunctions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrations-full-component',
  imports: [ MyMatCommonRouterModule, ReactiveFormsModule ],
  templateUrl: './registrations-full-component.html',
  styleUrl: './registrations-full-component.css'
})
export class RegistrationsFullComponent  {

}
