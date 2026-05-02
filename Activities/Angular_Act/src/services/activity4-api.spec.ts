import { TestBed } from '@angular/core/testing';

import { Activity4Api } from './activity4-api';

describe('Activity4Api', () => {
  let service: Activity4Api;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Activity4Api);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
