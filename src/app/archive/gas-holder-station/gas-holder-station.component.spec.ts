import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasHolderStationComponent } from './gas-holder-station.component';

describe('GasHolderStationComponent', () => {
  let component: GasHolderStationComponent;
  let fixture: ComponentFixture<GasHolderStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasHolderStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasHolderStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
