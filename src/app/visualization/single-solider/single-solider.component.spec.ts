import { TestBed, inject } from '@angular/core/testing';

import { SingleSoliderComponent } from './single-solider.component';

describe('a single-solider component', () => {
  let component: SingleSoliderComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SingleSoliderComponent
      ]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([SingleSoliderComponent], (SingleSoliderComponent) => {
    component = SingleSoliderComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
