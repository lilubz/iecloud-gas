import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationComponent } from './visualization.component';
import { VideoMonitoringComponent } from './video-monitoring/video-monitoring.component';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { SingleSoliderComponent } from './single-solider/single-solider.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'video-monitor',
    pathMatch: 'full'
  },
  {
    path: '',
    component: VisualizationComponent,
    children: [
      {
        path: 'video-monitor',
        component: VideoMonitoringComponent
      },
      {
        path: 'big-screen',
        component: BigScreenComponent
      },
      {
        path: 'single-solider',
        component: SingleSoliderComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'video-monitor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationRoutingModule { }
