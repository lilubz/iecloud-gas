import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderStorageComponent } from './cylinder-storage.component';

describe('CylinderStorageComponent', () => {
  let component: CylinderStorageComponent;
  let fixture: ComponentFixture<CylinderStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
