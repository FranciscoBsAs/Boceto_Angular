import { ActionCreator, createAction } from "@ngrx/store";


export const increment = createAction( '[Counter Component] Increment' );

export const decrement  = createAction( '[Counter Componet] Decrement');

export const reset = createAction( '[Counter Component] Reset' );

