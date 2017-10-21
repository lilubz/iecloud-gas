import { TestBed, inject } from '@angular/core/testing';

import { CylinderListComponent } from './cylinder-list.component';

describe('a cylinder-list component', () => {
	let component: CylinderListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CylinderListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CylinderListComponent], (CylinderListComponent) => {
		component = CylinderListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});