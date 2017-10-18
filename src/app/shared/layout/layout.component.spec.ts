import { TestBed, inject } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

describe('a layout component', () => {
	let component: LayoutComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LayoutComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LayoutComponent], (LayoutComponent) => {
		component = LayoutComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});