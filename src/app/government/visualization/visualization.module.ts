import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { VisualizationComponent } from './visualization.component';
import { VideoMonitoringComponent } from './video-monitoring/video-monitoring.component';
import { VisualizationRoutingModule } from './visualization-routing.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisualizationRoutingModule
  ],
  declarations: [
    VisualizationComponent,
    VideoMonitoringComponent
  ],
  providers: [

  ]
})
export class VisualizationModule { }
