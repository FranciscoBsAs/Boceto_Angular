import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { RouterModule } from '@angular/router';
import { RoutingPaths } from '../../shared/urlRoutesEnum';


@Component({
  selector: 'app-navbar',
  imports: [ MatCardModule, RouterModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  public routingPathsInNavBar = RoutingPaths

}
