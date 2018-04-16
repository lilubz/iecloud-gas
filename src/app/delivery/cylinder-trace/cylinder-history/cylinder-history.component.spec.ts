import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderHistoryComponent } from './cylinder-history.component';

describe('CylinderHistoryComponent', () => {
  let component: CylinderHistoryComponent;
  let fixture: ComponentFixture<CylinderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
