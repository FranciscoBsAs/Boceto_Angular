import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFullComponent } from './students-full-component';

describe('StudentsFullComponent', () => {
  let component: StudentsFullComponent;
  let fixture: ComponentFixture<StudentsFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
