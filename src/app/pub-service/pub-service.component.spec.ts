import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubServiceComponent } from './pub-service.component';

describe('PubServiceComponent', () => {
  let component: PubServiceComponent;
  let fixture: ComponentFixture<PubServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
