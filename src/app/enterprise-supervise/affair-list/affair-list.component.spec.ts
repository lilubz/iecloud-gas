import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairListComponent } from './affair-list.component';

describe('AffairListComponent', () => {
  let component: AffairListComponent;
  let fixture: ComponentFixture<AffairListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
