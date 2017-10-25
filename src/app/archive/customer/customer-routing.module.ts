import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerOverviewEnterpriseComponent } from './customer-overview/customer-overview-enterprise.component';
import { CustomerOverviewCountyComponent } from './customer-overview/customer-overview-county.component';
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
      {
        path: 'overview',
        redirectTo: 'overview/county',
        pathMatch: 'full'
      },
      {
        path: 'overview/county',
        component: CustomerOverviewCountyComponent,
        data: {
          title: '区域概览'
        },
      },
      {
        path: 'overview/enterprise/:id',
        component: CustomerOverviewEnterpriseComponent,
        data: {
          title: '企业概览'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
