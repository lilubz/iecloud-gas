import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './core/permission-guard.service';
import { RedirectionPageComponent } from './redirectionPage/redirectionPage.component';
import { LayoutComponent } from './layout/layout.component';
import { PubServiceModule } from './pub-service/pub-service.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'archive',
        loadChildren: './archive/archive.module#ArchiveModule',
      },
      {
        path: 'delivery',
        loadChildren: './delivery/delivery.module#DeliveryModule',
      },
      {
        path: 'gov-affairs',
        loadChildren: './gov-affairs/gov-affairs.module#GovAffairsModule',
      },
      {
        path: 'visualization',
        loadChildren: './visualization/visualization.module#VisualizationModule',
      },
      {
        path: 'statistic',
        loadChildren: './statistic/statistic.module#StatisticModule',
      },
      {
        path: 'system',
        loadChildren: './system/system.module#SystemModule',
      },
      {
        path: 'verification',
        loadChildren: './verification/verification.module#VerificationModule',
      },
      {
        path: 'pub-service',
        loadChildren: './pub-service/pub-service.module#PubServiceModule',
      },
      {
        path: 'enterprise-supervise',
        loadChildren: './enterprise-supervise/enterprise-supervise.module#EnterpriseSuperviseModule',
      },
      {
        path: 'input',
        loadChildren: './input/input.module#InputModule',
      },
      {
        path: 'home',
        component: RedirectionPageComponent,
        data: {
          title: '导航页',
          keep:true,
        }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data:{
      clear:true
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
