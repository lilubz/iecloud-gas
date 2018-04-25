import { TestBed, inject } from '@angular/core/testing';

import { RepricingRistComponent } from './repricing-rist.component';

describe('a repricing-rist component', () => {
    let component: RepricingRistComponent;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RepricingRistComponent
            ]
        });
    });

    // instantiation through framework injection
    beforeEach(inject([RepricingRistComponent], (RepricingRistComponent) => {
        component = RepricingRistComponent;
    }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
