import { pipeFullNameInterface } from '../sharedContent/entities';
import { FullNamePipe } from './full-name-pipe';

describe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });


  // my new test

  it( 'should return the full name', () => {

    // SET UP

    const thePipe = new FullNamePipe()

    const someInputNameAndSurname : pipeFullNameInterface = {
      name: 'Angel' ,
      surname: 'Di Maria'
    }

    // ACT or ARRANGE

    const result = thePipe.transform( someInputNameAndSurname)

    expect(result).toBe('Angel Di Maria')

  } )

});
