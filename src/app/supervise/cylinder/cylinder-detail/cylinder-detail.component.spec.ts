import { TestBed, inject } from '@angular/core/testing';

import { CylinderDetailComponent } from './cylinder-detail.component';

describe('a cylinder-detail component', () => {
	let component: CylinderDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CylinderDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CylinderDetailComponent], (CylinderDetailComponent) => {
		component = CylinderDetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});