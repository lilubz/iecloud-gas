import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterpriseSuperviseComponent } from './enterprise-supervise.component';
import { AffairDetailsComponent } from './affair-details/affair-details.component';
import { AffairListComponent } from './affair-list/affair-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'affair-list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EnterpriseSuperviseComponent,
    children: [
      {
        path: 'affair-list',
        component: AffairListComponent
      },
      {
        path: 'affair-details',
        component: AffairDetailsComponent
      },
      {
        path: 'report',
        loadChildren: './report/report.module#ReportModule',
        data: {
          title: '报表管理'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'affair-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseSuperviseRoutingModule { }
