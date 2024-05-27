import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentInformationComponent } from './admin-student-information.component';

describe('AdminStudentInformationComponent', () => {
  let component: AdminStudentInformationComponent;
  let fixture: ComponentFixture<AdminStudentInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStudentInformationComponent]
    });
    fixture = TestBed.createComponent(AdminStudentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
