import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StatisticComponent } from './statistic.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { AffairComponent } from './affair/affair.component';
import { EnterpriseComponent as CylinderEnterpriseComponent } from './cylinder/enterprise/enterprise.component';
import { CylinderStorageComponent } from './cylinder/cylinder-storage/cylinder-storage.component';
import { StorageDistributionComponent } from './cylinder/storage-distribution/storage-distribution.component';
import { CustomerComponent } from './cylinder/customer/customer.component';
import { IndustryAnalyzeComponent } from './industry-analyze/industry-analyze.component';
import { SafetyCheckComponent } from './safety-check/safety-check.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailComponent } from './add-customer/detail/detail.component';
import { LicenseWarningComponent } from './license-warning/license-warning.component';
import { CityOverviewComponent } from './city-overview/city-overview.component';
import { PartitionOverviewComponent } from './partition-overview/partition-overview.component';

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
            loadChildren: './cylinder/dispatcher/dispatcher.module#DispatcherModule',
          },
        ]
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent,
        data: {
          title: '企业统计'
        }
      },
      {
        path: 'customer',
        data: {
          title: '新增用户统计'
        },
        children: [
          {
            path: '',
            redirectTo: 'add-customer',
            pathMatch: 'full'
          },
          {
            path: 'add-customer',
            component: AddCustomerComponent,
            data: {
              title: '区域新增用户统计'
            }
          },
          {
            path: 'detail',
            component: DetailComponent,
            data: {
              title: '企业新增用户详情'
            }
          },
        ]
      },
      {
        path: 'affair',
        component: AffairComponent,
        data: {
          title: '执法事务统计'
        }
      },
      {
        path: 'safety-check',
        component: SafetyCheckComponent,
        data: {
          title: '入户安检统计'
        }
      },
      {
        path: 'industry-analyze',
        component: IndustryAnalyzeComponent,
        data: {
          title: '行业分析'
        }
      },
      {
        path: 'search-overview',
        data: {
          title: '区域概览'
        },
        children: [
          {
            path: '',
            redirectTo: 'city-overview',
            pathMatch: 'full'
          },
          {
            path: 'city-overview',
            component: CityOverviewComponent,
            data: {
              title: '全市概览'
            }
          },
          {
            path: 'partition-overview',
            component: PartitionOverviewComponent,
            data: {
              title: '分区概览'
            }
          },
        ]
      },
      {
        path: 'license-warning',
        component: LicenseWarningComponent,
        data: {
          title: '经营许可证到期预警'
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
