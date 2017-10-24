import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
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
    // children: [
    //   {
    //     path: 'detail',
    //     component: CylinderDetailComponent,
    //     data: {
    //       title: '用户详情'
    //     },
    //   },
    //   {
    //     path: 'list',
    //     component: CylinderListComponent,
    //     data: {
    //       title: '用户列表'
    //     },
    //   },
    //   {
    //     path: 'overview',
    //     redirectTo: 'overview/county',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'overview/county',
    //     component: CylinderOverviewCountyComponent,
    //     data: {
    //       title: '区域概览'
    //     },
    //   },
    //   {
    //     path: 'overview/enterprise/:id',
    //     component: CylinderOverviewEnterpriseComponent,
    //     data: {
    //       title: '企业概览'
    //     },
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
