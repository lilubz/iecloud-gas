import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPublicityComponent } from './security-publicity.component';

describe('SecurityPublicityComponent', () => {
  let component: SecurityPublicityComponent;
  let fixture: ComponentFixture<SecurityPublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
