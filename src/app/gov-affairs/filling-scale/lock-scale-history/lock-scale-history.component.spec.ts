import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockScaleHistoryComponent } from './lock-scale-history.component';

describe('LockScaleHistoryComponent', () => {
  let component: LockScaleHistoryComponent;
  let fixture: ComponentFixture<LockScaleHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockScaleHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockScaleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
