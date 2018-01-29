
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './report.component';
import { ManageComponent } from './manage/manage.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubmitComponent } from './submit/submit.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: 'report',
    redirectTo: 'report/manage',
    pathMatch: 'full'
  },
  {
    path: 'report',
    component: ReportComponent,
    children: [
      {
        path: 'manage',
        component: ManageComponent,
        data: {
          title: '报表管理'
        }
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
        data: {
          title: '报表统计'
        }
      },
      {
        path: 'submit',
        component: SubmitComponent,
        data: {
          title: '报表统计'
        }
      },
      {
        path: 'details',
        component: DetailsComponent,
        data: {
          title: '报表统计'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'manage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
