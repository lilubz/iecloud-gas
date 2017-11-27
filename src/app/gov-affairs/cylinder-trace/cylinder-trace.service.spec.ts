import { TestBed, inject } from '@angular/core/testing';

import { CylinderTraceService } from './cylinder-trace.service';

describe('CylinderTraceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CylinderTraceService]
    });
  });

  it('should be created', inject([CylinderTraceService], (service: CylinderTraceService) => {
    expect(service).toBeTruthy();
  }));
});
