import { AbstractControl, ValidationErrors } from "@angular/forms";

export function averageSup0 ( control : AbstractControl ) : ValidationErrors | null {
  const value : number = parseFloat(control.value)
  return (
    !isNaN( value ) && value > 0
      ? null 
      : { nullAverage: true }
  )
}


export function onlyLettersValidator ( control : AbstractControl ) : ValidationErrors | null {

  const word : string = control.value
  if( !word ) { return null }

  const lettersOnlyRegex = /^[a-zA-Z\s-]+$/ ;

  return (
    lettersOnlyRegex.test( word )
      ? null
      : { onlyLetters: true }
  )

}


export function firstLetterUpperCaseValidator ( control : AbstractControl ) : ValidationErrors | null {

  const theNameOrSurname : string = control.value ;

  if( !theNameOrSurname ) { 
    return null 
  }

  const firstLetter : string = theNameOrSurname.trim().charAt( 0 ) ;

  return(
    
    firstLetter === firstLetter.toUpperCase()
                  ? null
                  : { firstLetterIsNotUpperCase : true }

  )

}

//export default averageSup0
//export default onlyLettersValidator