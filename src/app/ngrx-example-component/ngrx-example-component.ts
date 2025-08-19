import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/contador/contador.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngrx-example-component',
  imports: [CommonModule],
  templateUrl: './ngrx-example-component.html',
  styleUrl: './ngrx-example-component.css'
})
export class NgrxExampleComponent {

  count$! : Observable<number>

  constructor(
    private theStore : Store<{ count: number }> 
  ){
    this.count$ = this.theStore.select('count')
  }


  incrementar () {
    this.theStore.dispatch( increment() )
  }

  decrementar () {
    this.theStore.dispatch( decrement() )
  }

  resetear () {
    this.theStore.dispatch( reset() )
  }

}
