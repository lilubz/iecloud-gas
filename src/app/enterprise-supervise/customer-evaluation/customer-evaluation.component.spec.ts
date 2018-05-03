import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEvaluationComponent } from './customer-evaluation.component';

describe('CustomerEvaluationComponent', () => {
  let component: CustomerEvaluationComponent;
  let fixture: ComponentFixture<CustomerEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
