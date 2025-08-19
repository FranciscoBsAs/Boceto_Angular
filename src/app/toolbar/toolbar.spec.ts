import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar } from './toolbar';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  // nuevo

  it( 'Titulo esperado', () => {
    const tituloEsperado : string = 'College App'
    expect(component.titulo).toBe( tituloEsperado )
  } )

  it( 'deberia retornar un titulo incorrecto', () => {
    

    const fixture = TestBed.createComponent(Toolbar)
    

    const titulo = fixture.componentInstance.obtenerTitutlo()


    expect( titulo ).toBe( 'Titulo incorrecto' )

  } )


});
