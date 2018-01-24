import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderStateComponent } from './cylinder-state.component';

describe('CylinderStateComponent', () => {
  let component: CylinderStateComponent;
  let fixture: ComponentFixture<CylinderStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
