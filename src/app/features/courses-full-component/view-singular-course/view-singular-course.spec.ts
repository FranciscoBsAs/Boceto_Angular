import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingularCourse } from './view-singular-course';

describe('ViewSingularCourse', () => {
  let component: ViewSingularCourse;
  let fixture: ComponentFixture<ViewSingularCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSingularCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSingularCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
