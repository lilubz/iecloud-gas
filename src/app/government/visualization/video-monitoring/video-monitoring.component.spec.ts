import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMonitoringComponent } from './video-monitoring.component';

describe('VideoMonitoringComponent', () => {
  let component: VideoMonitoringComponent;
  let fixture: ComponentFixture<VideoMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
