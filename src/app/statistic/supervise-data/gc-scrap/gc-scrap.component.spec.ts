import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcScrapComponent } from './gc-scrap.component';

describe('GcScrapComponent', () => {
  let component: GcScrapComponent;
  let fixture: ComponentFixture<GcScrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcScrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
