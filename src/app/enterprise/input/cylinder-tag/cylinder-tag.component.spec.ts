import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderTagComponent } from './cylinder-tag.component';

describe('CylinderTagComponent', () => {
  let component: CylinderTagComponent;
  let fixture: ComponentFixture<CylinderTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
