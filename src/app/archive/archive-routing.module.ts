import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderComponent } from './cylinder/cylinder.component';
import { EmployeeComponent } from './employee/employee.component';
import { ArchiveComponent } from './archive.component';
import { CylinderDetailComponent } from './cylinder/cylinder-detail/cylinder-detail.component';
import { CylinderListComponent } from './cylinder/cylinder-list/cylinder-list.component';
import { CylinderOverviewCountyComponent } from './cylinder/cylinder-overview/cylinder-overview-county.component';
import { CylinderOverviewEnterpriseComponent } from './cylinder/cylinder-overview/cylinder-overview-enterprise.component';
import { CylinderOverviewService } from './cylinder/cylinder-overview/cylinder-overview.service';
import { CustomerOverviewService } from './customer/customer-overview/customer-overview.service';
import { CustomerOverviewCountyComponent } from './customer/customer-overview/customer-overview-county.component';
import { CustomerOverviewEnterpriseComponent } from './customer/customer-overview/customer-overview-enterprise.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseDetailComponent } from './enterprise/enterprise-detail/enterprise-detail.component';
import { CarComponent } from './car/car.component';
import { SearchComponent } from './car/search/search.component';
import { DispatcherComponent } from './employee/dispatcher/dispatcher.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '基础档案'
    },
    children: [
      {
        path: '',
        redirectTo: 'cylinder/overview',
        pathMatch: 'full'
      },
      {
        path: 'cylinder',
        component: CylinderComponent,
        data: {
          title: '气瓶档案'
        },
        children: [
          {
            path: '',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'detail/:id',
            component: CylinderDetailComponent,
            data: {
              title: '气瓶详情'
            }
          },
          {
            path: 'list',
            component: CylinderListComponent,
            data: {
              title: '气瓶列表'
            },
          },
          {
            path: 'overview',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'overview/county',
            component: CylinderOverviewCountyComponent,
            canActivate: [CylinderOverviewService],
            data: {
              title: '区域概览'
            },
          },
          {
            path: 'overview/enterprise/:id',
            component: CylinderOverviewEnterpriseComponent,
            data: {
              title: '企业概览'
            },
          },
        ]
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: '用户档案'
        },
        children: [
          {
            path: '',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
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
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'overview/county',
            component: CustomerOverviewCountyComponent,
            canActivate: [CustomerOverviewService],
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
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent,
        data: {
          title: '企业档案'
        },
        children: [
          {
            path: '',
            redirectTo: 'detail',
            pathMatch: 'full'
          },
          {
            path: 'detail',
            component: EnterpriseDetailComponent,
            data: {
              title: '企业详情'
            },
          },
        ]
      },
      {
        path: 'car',
        component: CarComponent,
        data: {
          title: '车辆信息'
        },
        children: [
          {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
          },
          {
            path: 'search',
            component: SearchComponent,
            data: {
              title: '搜索车辆'
            }
          },
        ]
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: '送气工信息'
        },
        children: [
          {
            path: '',
            redirectTo: 'dispatcher',
            pathMatch: 'full'
          },
          {
            path: 'dispatcher',
            component: DispatcherComponent,
            data: {
              title: '送气工查询'
            }
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'cylinder/overview',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
