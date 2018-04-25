import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCarComponent } from './delivery-car.component';

describe('DeliveryCarComponent', () => {
  let component: DeliveryCarComponent;
  let fixture: ComponentFixture<DeliveryCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
