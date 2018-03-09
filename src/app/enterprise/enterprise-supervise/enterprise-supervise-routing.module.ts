import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffairDetailsComponent } from './affair-details/affair-details.component';
import { AffairListComponent } from './affair-list/affair-list.component';
import { HistoryComponent } from './report/history/history.component';
import { ReportComponent } from './report/report.component';
import { SubmitComponent } from './report/submit/submit.component';
import { RepricingRistComponent } from './repricing-rist/repricing-rist.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '企业监管'
    },
    children: [
      {
        path: '',
        redirectTo: 'affair-list',
        pathMatch: 'full'
      },
      {
        path: '',
        data: {
          title: '事务处理'
        },
        children: [
          {
            path: '',
            redirectTo: 'affair-list',
            pathMatch: 'full'
          },
          {
            path: 'affair-list',
            component: AffairListComponent,
            data: {
              title: '事务列表'
            },
          },
          {
            path: 'affair-details',
            component: AffairDetailsComponent,
            data: {
              title: '事务详情'
            },
          },
        ]
      },
      {
        path: 'report',
        component: ReportComponent,
        data: {
          title: '报表管理'
        },
        children: [
          {
            path: '',
            redirectTo: 'submit',
            pathMatch: 'full'
          },
          {
            path: 'history',
            component: HistoryComponent,
            data: {
              title: '历史记录'
            }
          },
          {
            path: 'submit',
            component: SubmitComponent,
            data: {
              title: '报表提交'
            }
          },
        ]
      },
      {
        path: 'repricing-rist',
        component: RepricingRistComponent,
        data: {
          title: '重瓶定价'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseSuperviseRoutingModule { }
