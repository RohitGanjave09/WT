import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity4UserList } from './activity4-user-list';

describe('Activity4UserList', () => {
  let component: Activity4UserList;
  let fixture: ComponentFixture<Activity4UserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activity4UserList],
    }).compileComponents();

    fixture = TestBed.createComponent(Activity4UserList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
