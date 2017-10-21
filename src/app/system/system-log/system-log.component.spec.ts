import { TestBed, inject } from '@angular/core/testing';

import { SystemLogComponent } from './system-log.component';

describe('a system-log component', () => {
  let component: SystemLogComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SystemLogComponent
      ]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([SystemLogComponent], (SystemLogComponent) => {
    component = SystemLogComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
