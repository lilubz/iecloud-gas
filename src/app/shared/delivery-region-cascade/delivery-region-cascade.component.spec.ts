import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRegionCascadeComponent } from './delivery-region-cascade.component';

describe('DeliveryRegionCascadeComponent', () => {
  let component: DeliveryRegionCascadeComponent;
  let fixture: ComponentFixture<DeliveryRegionCascadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryRegionCascadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRegionCascadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
