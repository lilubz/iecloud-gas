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
import { DispatcherComponent } from './cylinder/dispatcher/dispatcher.component';
import { CustomerComponent } from './cylinder/customer/customer.component';
import { PossessComponent } from './cylinder/possess/possess.component';
import { FlowComponent } from './cylinder/flow/flow.component';
import { DetailsComponent } from './cylinder/dispatcher/details/details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cylinder',
    pathMatch: 'full'
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
            path: 'dispatcher',
            component: DispatcherComponent
          },
          {
            path: 'customer',
            component: CustomerComponent
          },
          {
            path: 'possess',
            component: PossessComponent
          },
          {
            path: 'flow',
            component: FlowComponent
          },
          {
            path: 'dispatcher-details',
            component: DetailsComponent
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
