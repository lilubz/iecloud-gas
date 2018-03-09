import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { VisualizationComponent } from './visualization.component';
import { VideoMonitoringComponent } from './video-monitoring/video-monitoring.component';
import { VisualizationRoutingModule } from './visualization-routing.module';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { BigScreenService } from './big-screen/big-screen.service';
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
    BigScreenComponent,
    SingleSoliderComponent
  ],
  providers: [
    BigScreenService
  ]
})
export class VisualizationModule { }
