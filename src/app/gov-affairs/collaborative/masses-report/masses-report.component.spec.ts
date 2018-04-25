import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassesReportComponent } from './masses-report.component';

describe('MassesReportComponent', () => {
  let component: MassesReportComponent;
  let fixture: ComponentFixture<MassesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
