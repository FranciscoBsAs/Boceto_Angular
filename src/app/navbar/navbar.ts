import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Output() currentSectionFromChild : EventEmitter< string > = new EventEmitter<string>()
  
  navigateSections( section : string ) {
    this.currentSectionFromChild.emit( section )
  }

}
