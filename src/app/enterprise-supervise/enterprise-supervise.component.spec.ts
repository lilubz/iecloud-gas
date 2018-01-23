import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSuperviseComponent } from './enterprise-supervise.component';

describe('EnterpriseSuperviseComponent', () => {
  let component: EnterpriseSuperviseComponent;
  let fixture: ComponentFixture<EnterpriseSuperviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseSuperviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSuperviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
