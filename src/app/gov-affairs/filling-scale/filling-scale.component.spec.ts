import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingScaleComponent } from './filling-scale.component';

describe('FillingScaleComponent', () => {
  let component: FillingScaleComponent;
  let fixture: ComponentFixture<FillingScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillingScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillingScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
