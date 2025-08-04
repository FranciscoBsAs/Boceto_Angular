import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingularStudent } from './view-singular-student';

describe('ViewSingularStudent', () => {
  let component: ViewSingularStudent;
  let fixture: ComponentFixture<ViewSingularStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSingularStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSingularStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
