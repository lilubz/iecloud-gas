import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationComponent } from './visualization.component';
import { VideoMonitoringComponent } from './video-monitoring/video-monitoring.component';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { SingleSoliderComponent } from './single-solider/single-solider.component';
import { TalkDispatchComponent } from './talk-dispatch/talk-dispatch.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '视频查看'
    },
    children: [
      {
        path: '',
        redirectTo: 'video-monitor',
        pathMatch: 'full'
      },
      {
        path: 'video-monitor',
        component: VideoMonitoringComponent,
        data: {
          title: '视频监控'
        }
      },
      {
        path: 'big-screen',
        component: BigScreenComponent,
        data: {
          title: '大屏展示'
        }
      },
      {
        path: 'single-solider',
        component: SingleSoliderComponent,
        data: {
          title: '单兵执法'
        }
      },
      {
        path: 'talk-dispatch',
        component: TalkDispatchComponent,
        data: {
          title: '可视化对讲调度'
        }
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
