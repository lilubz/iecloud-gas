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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cylinder',
    pathMatch: 'full'
  },
  {
    path: 'current-warning',
    component: CurrentWarningComponent
  },
  {
    path: 'history-warning',
    redirectTo: 'history-warning/1',
    pathMatch: 'full'
  },
  {
    path: 'history-warning/:type',
    component: HistoryWarningComponent
  },
  {
    path: '',
    component: StatisticComponent,
    children: [
      {
        path: 'cylinder',
        component: CylinderComponent,
        children: [
          {
            path: '',
            redirectTo: 'enterprise',
            pathMatch: 'full'
          },
          {
            path: 'enterprise',
            component: CylinderEnterpriseComponent
          },
          {
            path: 'cylinder-storage',
            component: CylinderStorageComponent
          },
          {
            path: 'storage-distribution',
            component: StorageDistributionComponent
          },
          {
            path: 'customer',
            component: CustomerComponent
          },
          {
            path: 'dispatcher',
            loadChildren: './cylinder/dispatcher/dispatcher.module#DispatcherModule',
          },
        ]
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent
      },
      {
        path: 'affair',
        component: AffairComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'cylinder',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
