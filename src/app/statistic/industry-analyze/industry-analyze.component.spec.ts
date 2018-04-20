import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAnalyzeComponent } from './industry-analyze.component';

describe('IndustryAnalyzeComponent', () => {
  let component: IndustryAnalyzeComponent;
  let fixture: ComponentFixture<IndustryAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
