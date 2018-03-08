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
