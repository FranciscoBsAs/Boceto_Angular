import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BigTitle } from '../../shared/directives/big-title';

@Component({
  selector: 'app-toolbar',
  imports: [ CommonModule, BigTitle ],
  templateUrl: './toolbar.html',
  standalone: true,
  styleUrl: './toolbar.css'
})
export class Toolbar {


  readonly titulo : string = "College App"

  // nuevo ocasional, para testing



  public obtenerTitutlo () : string {
    return 'Titulo incorrecto'
  }

}
