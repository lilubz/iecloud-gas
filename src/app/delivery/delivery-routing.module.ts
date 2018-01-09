import { CylinderHistoryComponent } from './cylinder-trace/cylinder-history/cylinder-history.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
import { CylinderStateComponent } from './cylinder-trace/cylinder-state/cylinder-state.component';
import { CylinderNumberComponent } from './cylinder-trace/cylinder-number/cylinder-number.component';
import { CylinderRecordComponent } from './cylinder-trace/cylinder-record/cylinder-record.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cylinder-trace',
    pathMatch: 'full'
  },
  {
    path: 'cylinder-trace',
    component: CylinderTraceComponent,
    children: [
      {
        path: '',
        redirectTo: 'state',
      },
      {
        path: 'state',
        component: CylinderStateComponent
      },
      {
        path: 'cylinder-number',
        component: CylinderNumberComponent
      },
      {
        path: 'cylinder-record',
        component: CylinderRecordComponent
      },
      {
        path: 'cylinder-history',
        component: CylinderHistoryComponent
      }
    ]
  },
  {
    path: 'cylinder-filling',
    component: CylinderFillingComponent
  },
  {
    path: '**',
    redirectTo: 'cylinder-trace/state',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
