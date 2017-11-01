import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderInfoComponent } from './cylinder-info.component';

describe('CylinderInfoComponent', () => {
  let component: CylinderInfoComponent;
  let fixture: ComponentFixture<CylinderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
