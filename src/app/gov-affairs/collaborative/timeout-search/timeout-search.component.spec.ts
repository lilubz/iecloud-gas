import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoutSearchComponent } from './timeout-search.component';

describe('TimeoutSearchComponent', () => {
  let component: TimeoutSearchComponent;
  let fixture: ComponentFixture<TimeoutSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeoutSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
