import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStaffInformationComponent } from './admin-staff-information.component';

describe('AdminStaffInformationComponent', () => {
  let component: AdminStaffInformationComponent;
  let fixture: ComponentFixture<AdminStaffInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStaffInformationComponent]
    });
    fixture = TestBed.createComponent(AdminStaffInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
