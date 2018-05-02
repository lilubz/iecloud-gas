import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFoundComponent } from './enterprise-found.component';

describe('EnterpriseFoundComponent', () => {
  let component: EnterpriseFoundComponent;
  let fixture: ComponentFixture<EnterpriseFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
