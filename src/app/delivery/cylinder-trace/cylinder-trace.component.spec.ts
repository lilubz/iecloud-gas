import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderTraceComponent } from './cylinder-trace.component';

describe('CylinderTraceComponent', () => {
  let component: CylinderTraceComponent;
  let fixture: ComponentFixture<CylinderTraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderTraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
