import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent } from './statistic.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseComponent as CylinderEnterpriseComponent } from './cylinder/enterprise/enterprise.component';
import { CylinderStorageComponent } from './cylinder/cylinder-storage/cylinder-storage.component';
import { StorageDistributionComponent } from './cylinder/storage-distribution/storage-distribution.component';
import { DispatcherComponent } from './cylinder/dispatcher/dispatcher.component';
import { CustomerComponent } from './cylinder/customer/customer.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '统计分析'
    },
    children: [
      {
        path: '',
        redirectTo: 'cylinder',
        pathMatch: 'full'
      },
      {
        path: 'cylinder',
        component: CylinderComponent,
        data: {
          title: '气瓶统计'
        },
        children: [
          {
            path: '',
            redirectTo: 'enterprise',
            pathMatch: 'full'
          },
          {
            path: 'enterprise',
            component: CylinderEnterpriseComponent,
            data: {
              title: '企业统计'
            }
          },
          {
            path: 'cylinder-storage',
            component: CylinderStorageComponent,
            data: {
              title: '供应站统计'
            }
          },
          {
            path: 'storage-distribution',
            component: StorageDistributionComponent,
            data: {
              title: '储配站统计'
            }
          },
          {
            path: 'customer',
            component: CustomerComponent,
            data: {
              title: '燃气用户统计'
            }
          },
          {
            path: 'dispatcher',
            loadChildren: './cylinder/dispatcher/dispatcher-enterprise.module#DispatcherModule',
          },
        ]
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent,
        data: {
          title: '企业统计'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
