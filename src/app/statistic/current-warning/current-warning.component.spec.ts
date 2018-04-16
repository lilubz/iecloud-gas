import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWarningComponent } from './current-warning.component';

describe('CurrentWarningComponent', () => {
  let component: CurrentWarningComponent;
  let fixture: ComponentFixture<CurrentWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
