import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviseDataComponent } from './supervise-data.component';

describe('SuperviseDataComponent', () => {
  let component: SuperviseDataComponent;
  let fixture: ComponentFixture<SuperviseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperviseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperviseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
