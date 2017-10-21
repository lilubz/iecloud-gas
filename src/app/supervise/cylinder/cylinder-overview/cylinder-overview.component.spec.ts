import { TestBed, inject } from '@angular/core/testing';

import { CylinderOverviewComponent } from './cylinder-overview.component';

describe('a cylinder-overview component', () => {
	let component: CylinderOverviewComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CylinderOverviewComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CylinderOverviewComponent], (CylinderOverviewComponent) => {
		component = CylinderOverviewComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});