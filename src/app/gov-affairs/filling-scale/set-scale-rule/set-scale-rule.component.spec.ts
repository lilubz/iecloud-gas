import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetScaleRuleComponent } from './set-scale-rule.component';

describe('SetScaleRuleComponent', () => {
  let component: SetScaleRuleComponent;
  let fixture: ComponentFixture<SetScaleRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetScaleRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetScaleRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
