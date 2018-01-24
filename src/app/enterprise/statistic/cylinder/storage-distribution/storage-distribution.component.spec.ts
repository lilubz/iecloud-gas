import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageDistributionComponent } from './storage-distribution.component';

describe('StorageDistributionComponent', () => {
  let component: StorageDistributionComponent;
  let fixture: ComponentFixture<StorageDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
