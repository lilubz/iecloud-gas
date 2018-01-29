import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { HistoryComponent } from './history/history.component';
import { SubmitComponent } from './submit/submit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'submit',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ReportComponent,
    data: {
      title: '报表管理'
    },
    children: [
      {
        path: 'history',
        component: HistoryComponent,
        data: {
          title: '历史报表'
        },
      },
      {
        path: 'submit',
        component: SubmitComponent,
        data: {
          title: '报表提交'
        },
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'cylinder/overview'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
