import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovAffairsComponent } from './gov-affairs.component';

describe('GovAffairsComponent', () => {
  let component: GovAffairsComponent;
  let fixture: ComponentFixture<GovAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
