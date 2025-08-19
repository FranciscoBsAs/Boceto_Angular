// El REDUCER es lo que va a reaccionar a nuestros cambios de estados

import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./contador.actions";

export const initialState : number = 0

export const counterReducer = createReducer(

    initialState,
    on( increment, ( state ) => state + 1 ),
    on( decrement, ( state ) => state - 1 ),
    on( reset, () => initialState )

)