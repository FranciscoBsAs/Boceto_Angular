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

}
