import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherDetailsComponent } from './dispatcher-details.component';

describe('DispatcherDetailsComponent', () => {
  let component: DispatcherDetailsComponent;
  let fixture: ComponentFixture<DispatcherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatcherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatcherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
