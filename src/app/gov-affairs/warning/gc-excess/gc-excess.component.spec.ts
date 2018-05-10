import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcExcessComponent } from './gc-excess.component';

describe('GcExcessComponent', () => {
  let component: GcExcessComponent;
  let fixture: ComponentFixture<GcExcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcExcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcExcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
