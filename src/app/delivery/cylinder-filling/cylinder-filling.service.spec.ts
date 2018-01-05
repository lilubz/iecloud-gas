import { TestBed, inject } from '@angular/core/testing';

import { CylinderFillingService } from './cylinder-filling.service';

describe('CylinderFillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CylinderFillingService]
    });
  });

  it('should be created', inject([CylinderFillingService], (service: CylinderFillingService) => {
    expect(service).toBeTruthy();
  }));
});
