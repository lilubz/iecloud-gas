import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { VisualizationComponent } from './visualization.component';
import { VisualizationService } from './shared/visualization.service';
import { Visualization } from './shared/visualization.model';

describe('a visualization component', () => {
	let component: VisualizationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: VisualizationService, useClass: MockVisualizationService },
				VisualizationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VisualizationComponent], (VisualizationComponent) => {
		component = VisualizationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original visualization service
class MockVisualizationService extends VisualizationService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
