import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyStationComponent } from './supply-station.component';

describe('SupplyStationComponent', () => {
  let component: SupplyStationComponent;
  let fixture: ComponentFixture<SupplyStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
