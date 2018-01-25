import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerOverviewService } from './customer-overview/customer-overview.service';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerOverviewEnterpriseComponent } from './customer-overview/customer-overview-enterprise.component';
const routes: Routes = [
  {
    path: 'customer',
    redirectTo: 'customer/overview',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: {
      title: '用户档案'
    },
    children: [
      {
        path: 'detail',
        component: CustomerDetailComponent,
        data: {
          title: '用户详情'
        },
      },
      {
        path: 'list',
        component: CustomerListComponent,
        data: {
          title: '用户列表'
        },
      },
      {
        path: 'overview',
        component: CustomerOverviewEnterpriseComponent,
        data: {
          title: '企业概览'
        },
      },
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
export class CustomerRoutingModule { }
