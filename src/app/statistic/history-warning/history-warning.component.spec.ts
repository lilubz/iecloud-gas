import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWarningComponent } from './history-warning.component';

describe('HistoryWarningComponent', () => {
  let component: HistoryWarningComponent;
  let fixture: ComponentFixture<HistoryWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
