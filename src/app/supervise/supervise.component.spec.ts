import { TestBed, inject } from '@angular/core/testing';

import { SuperviseComponent } from './supervise.component';

describe('a supervise component', () => {
	let component: SuperviseComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SuperviseComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SuperviseComponent], (SuperviseComponent) => {
		component = SuperviseComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});