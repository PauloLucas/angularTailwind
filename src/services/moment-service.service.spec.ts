import { TestBed } from '@angular/core/testing';

import { MomentService } from './moment.service';

describe('MomentServiceService', () => {
  let service: MomentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
