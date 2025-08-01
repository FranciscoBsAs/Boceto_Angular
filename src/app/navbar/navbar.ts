import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'


@Component({
  selector: 'app-navbar',
  imports: [ MatCardModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Output() currentSectionFromChild : EventEmitter< string > = new EventEmitter<string>()
  
  navigateSections( section : string ) {
    this.currentSectionFromChild.emit( section )
  }

}
