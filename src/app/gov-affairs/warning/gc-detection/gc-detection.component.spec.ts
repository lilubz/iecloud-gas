import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcDetectionComponent } from './gc-detection.component';

describe('GcDetectionComponent', () => {
  let component: GcDetectionComponent;
  let fixture: ComponentFixture<GcDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
