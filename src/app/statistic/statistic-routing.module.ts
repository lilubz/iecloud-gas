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
import { CurrentWarningComponent } from './current-warning/current-warning.component';
import { HistoryWarningComponent } from './history-warning/history-warning.component';
import { IndustryAnalyzeComponent } from './industry-analyze/industry-analyze.component';
import { SafetyCheckComponent } from './safety-check/safety-check.component';

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
        path: 'affair',
        component: AffairComponent,
        data: {
          title: '执法事务统计'
        }
      },
      {
        path: 'current-warning',
        component: CurrentWarningComponent,
        data: {
          title: '实时预警'
        }
      },
      {
        path: 'history-warning',
        redirectTo: 'history-warning/1',
        pathMatch: 'full'
      },
      {
        path: 'history-warning/:type',
        component: HistoryWarningComponent,
        data: {
          title: '历史预警'
        }
      },
      {
        path: 'safety-check',
        component: SafetyCheckComponent,
        data: {
          title: '入户安全统计'
        }
      },
      {
        path: 'industry-analyze',
        component: IndustryAnalyzeComponent,
        data: {
          title: '行业分析'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
