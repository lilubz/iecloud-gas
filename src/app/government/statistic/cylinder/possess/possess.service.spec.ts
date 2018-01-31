import { TestBed, inject } from '@angular/core/testing';

import { PossessService } from './possess.service';

describe('PossessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PossessService]
    });
  });

  it('should be created', inject([PossessService], (service: PossessService) => {
    expect(service).toBeTruthy();
  }));
});
