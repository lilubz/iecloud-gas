import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderOverviewTableComponent } from './cylinder-overview-table.component';

describe('CylinderOverviewTableComponent', () => {
  let component: CylinderOverviewTableComponent;
  let fixture: ComponentFixture<CylinderOverviewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderOverviewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderOverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
