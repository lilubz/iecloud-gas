import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationComponent } from './visualization.component';
import { VideoMonitoringComponent } from './video-monitoring/video-monitoring.component';
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
