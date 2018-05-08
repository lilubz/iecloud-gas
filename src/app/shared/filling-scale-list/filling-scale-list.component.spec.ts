import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingScaleListComponent } from './filling-scale-list.component';

describe('FillingScaleListComponent', () => {
  let component: FillingScaleListComponent;
  let fixture: ComponentFixture<FillingScaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillingScaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillingScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
