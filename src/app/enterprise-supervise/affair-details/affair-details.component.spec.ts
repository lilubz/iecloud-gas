import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairDetailsComponent } from './affair-details.component';

describe('AffairDetailsComponent', () => {
  let component: AffairDetailsComponent;
  let fixture: ComponentFixture<AffairDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
