import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoursesForm } from './edit-courses-form';

describe('EditCoursesForm', () => {
  let component: EditCoursesForm;
  let fixture: ComponentFixture<EditCoursesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCoursesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCoursesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
