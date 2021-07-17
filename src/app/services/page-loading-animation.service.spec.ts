import { TestBed } from '@angular/core/testing';

import { PageLoadingAnimationService } from './page-loading-animation.service';

describe('PageLoadingAnimationService', () => {
  let service: PageLoadingAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageLoadingAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
