import { Pipe, PipeTransform } from '@angular/core';

interface pipeFullNameInterface {
  name : string,
  surname : string
}

@Pipe({
  name: 'fullNamePipe'
})
export class FullNamePipe implements PipeTransform {

  transform( value : pipeFullNameInterface ) : string {

    return(
      `${ value.name } ${ value.surname } `
    )
  }

}
