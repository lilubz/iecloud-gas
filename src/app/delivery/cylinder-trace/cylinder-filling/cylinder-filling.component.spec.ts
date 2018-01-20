import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderFillingComponent } from './cylinder-filling.component';

describe('CylinderFillingComponent', () => {
  let component: CylinderFillingComponent;
  let fixture: ComponentFixture<CylinderFillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderFillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
