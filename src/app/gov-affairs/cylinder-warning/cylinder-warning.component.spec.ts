import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderWarningComponent } from './cylinder-warning.component';

describe('CylinderWarningComponent', () => {
  let component: CylinderWarningComponent;
  let fixture: ComponentFixture<CylinderWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
