import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { VisualizationComponent } from './visualization.component';
import { VideoMonitoringComponent } from './video-monitoring/video-monitoring.component';
import { VisualizationRoutingModule } from './visualization-routing.module';
import { SingleSoliderComponent } from './single-solider/single-solider.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisualizationRoutingModule
  ],
  declarations: [
    VisualizationComponent,
    VideoMonitoringComponent,
    SingleSoliderComponent
  ],
  providers: [

  ]
})
export class VisualizationModule { }
