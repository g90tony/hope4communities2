import { TestBed } from '@angular/core/testing';

import { WindowInstaneService } from './window-instane.service';

describe('WindowInstaneService', () => {
  let service: WindowInstaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowInstaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
