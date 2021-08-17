import { TestBed } from '@angular/core/testing';

import { DocumentRef } from './document-reference.service';

describe('DocumentRef', () => {
  let service: DocumentRef;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentRef);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
