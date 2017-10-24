import { TestBed, inject } from '@angular/core/testing';

import { CylinderComponent } from './cylinder.component';

describe('a cylinder component', () => {
	let component: CylinderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CylinderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CylinderComponent], (CylinderComponent) => {
		component = CylinderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});