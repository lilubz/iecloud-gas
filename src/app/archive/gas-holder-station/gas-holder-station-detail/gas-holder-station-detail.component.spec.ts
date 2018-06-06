import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasHolderStationDetailComponent } from './gas-holder-station-detail.component';

describe('GasHolderStationDetailComponent', () => {
  let component: GasHolderStationDetailComponent;
  let fixture: ComponentFixture<GasHolderStationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasHolderStationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasHolderStationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
