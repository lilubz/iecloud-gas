import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkDispatchComponent } from './talk-dispatch.component';

describe('TalkDispatchComponent', () => {
  let component: TalkDispatchComponent;
  let fixture: ComponentFixture<TalkDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
