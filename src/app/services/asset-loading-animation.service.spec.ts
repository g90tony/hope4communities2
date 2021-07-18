import { TestBed } from '@angular/core/testing';

import { AssetLoadingAnimationService } from './asset-loading-animation.service';

describe('AssetLoadingAnimationService', () => {
  let service: AssetLoadingAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetLoadingAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
