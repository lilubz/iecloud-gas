import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'archive',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'archive',
        loadChildren: './archive/archive.module#ArchiveModule',
        data: {
          title: '基础档案'
        }
      },
      {
        path: 'delivery',
        loadChildren: './delivery/delivery.module#DeliveryModule',
        data: {
          title: '配送监管'
        }
      },
      {
        path: 'gov-affairs',
        loadChildren: './gov-affairs/gov-affairs.module#GovAffairsModule',
        data: {
          title: '监管事务'
        }
      },
      {
        path: 'visualization',
        loadChildren: './visualization/visualization.module#VisualizationModule',
        data: {
          title: '可视化'
        }
      },
      {
        path: 'statistic',
        loadChildren: './statistic/statistic.module#StatisticModule',
        data: {
          title: '统计查询'
        }
      },
      {
        path: 'system',
        loadChildren: './system/system.module#SystemModule',
        data: {
          title: '系统管理'
        }
      },
      {
        path: 'verification',
        loadChildren: './verification/verification.module#VerificationModule',
        data: {
          title: '审核管理'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GovernmentRoutingModule { }
