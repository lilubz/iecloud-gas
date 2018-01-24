import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderRecordComponent } from './cylinder-record.component';

describe('CylinderRecordComponent', () => {
  let component: CylinderRecordComponent;
  let fixture: ComponentFixture<CylinderRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
