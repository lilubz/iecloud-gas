import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth-guard.service';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

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
        loadChildren: './archive/archive-enterprise.module#ArchiveModule',
        // component: PageNotFoundComponent,
        data: {
          title: '基础档案'
        }
      },
      {
        path: 'delivery',
        loadChildren: './delivery/delivery-enterprise.module#DeliveryModule',
        data: {
          title: '监管查询'
        }
      },
      {
        path: 'statistic',
        loadChildren: './statistic/statistic-enterprise.module#StatisticModule',
        data: {
          title: '统计查询'
        }
      },
      {
        path: 'system',
        loadChildren: './system/system-enterprise.module#SystemModule',
        data: {
          title: '系统管理'
        }
      },
      {
        path: 'enterprise-supervise',
        loadChildren: './enterprise-supervise/enterprise-supervise.module#EnterpriseSuperviseModule',
        data: {
          title: '企业监管'
        }
      },
      {
        path: 'input',
        loadChildren: './input/input-enterprise.module#InputModule',
        data: {
          title: '信息录入'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EnterpriseRoutingModule { }
