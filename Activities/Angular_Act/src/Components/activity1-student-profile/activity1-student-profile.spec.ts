import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity1StudentProfile } from './activity1-student-profile';

describe('Activity1StudentProfile', () => {
  let component: Activity1StudentProfile;
  let fixture: ComponentFixture<Activity1StudentProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activity1StudentProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(Activity1StudentProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
