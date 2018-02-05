import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatcherComponent } from './dispatcher.component';
import { OverviewComponent } from './overview/overview.component';
import { DispatcherDetailsComponent } from './dispatcher-details/dispatcher-details.component';

const routes: Routes = [
  {
    path: 'dispatcher',
    redirectTo: 'dispatcher/overview',
    pathMatch: 'full'
  },
  {
    path: 'dispatcher',
    component: DispatcherComponent,
    data: {
      title: '气瓶统计'
    },
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
          title: '用户详情'
        },
      },
      {
        path: 'dispatcher-details',
        component: DispatcherDetailsComponent,
        data: {
          title: '用户列表'
        },
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dispatcher/overview',
    pathMatch: 'full'
    // component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatcherRoutingModule { }
