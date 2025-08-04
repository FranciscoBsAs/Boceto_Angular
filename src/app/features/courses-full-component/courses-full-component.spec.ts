import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFullComponent } from './courses-full-component';

describe('CoursesFullComponent', () => {
  let component: CoursesFullComponent;
  let fixture: ComponentFixture<CoursesFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
