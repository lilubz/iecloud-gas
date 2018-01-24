import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderNumberComponent } from './cylinder-number.component';

describe('CylinderNumberComponent', () => {
  let component: CylinderNumberComponent;
  let fixture: ComponentFixture<CylinderNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
