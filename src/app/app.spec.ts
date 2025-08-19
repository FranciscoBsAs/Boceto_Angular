import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { appConfig } from './app.config';

describe('App', () => {

  // CONFIG
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // SI HAY MÁS DEPENDENCIAS EN IMPORTS, MOCKEARLAS
    }).compileComponents();
  });

  // CASOS ESPECIFICOS: PRUEBAS
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /* 
  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-coderhouse-project');
  });
  */

  // TEST HARDCODEADO DE CLASE 12/8

  it( 'deberia retornar un titulo incorrecto', () =>{

    // SET UP
    const fixture : ComponentFixture<App> = TestBed.createComponent( App )  // SE OBTIENE UN COMPONENTE Y SE LO ENCAPSULA EN FIXTURE
    // UNA FIXTURE NOS EXPONE LOS DETECT-CHANGES, COMPONENT, EL DOM
    
    // ACT 
    const titulo = fixture.componentInstance.obtenerTitulo()

    // ASSERT
    expect(titulo).toBe('Titulo incorrecto')

  } )
});
