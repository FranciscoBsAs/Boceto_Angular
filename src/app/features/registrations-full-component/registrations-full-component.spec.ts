import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsFullComponent } from './registrations-full-component';

describe('RegistrationsFullComponent', () => {
  let component: RegistrationsFullComponent;
  let fixture: ComponentFixture<RegistrationsFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationsFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
