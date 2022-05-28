import { TestBed } from '@angular/core/testing';

import { RESTCoutriesService } from './restcoutries.service';

describe('RESTCoutriesService', () => {
  let service: RESTCoutriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTCoutriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
