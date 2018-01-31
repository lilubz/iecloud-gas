import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessComponent } from './possess.component';

describe('PossessComponent', () => {
  let component: PossessComponent;
  let fixture: ComponentFixture<PossessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
