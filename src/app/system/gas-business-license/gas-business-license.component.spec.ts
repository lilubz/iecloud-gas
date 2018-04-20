import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasBusinessLicenseComponent } from './gas-business-license.component';

describe('GasBusinessLicenseComponent', () => {
  let component: GasBusinessLicenseComponent;
  let fixture: ComponentFixture<GasBusinessLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasBusinessLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasBusinessLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
