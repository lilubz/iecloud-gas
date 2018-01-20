import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairComponent } from './affair.component';

describe('AffairComponent', () => {
  let component: AffairComponent;
  let fixture: ComponentFixture<AffairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
