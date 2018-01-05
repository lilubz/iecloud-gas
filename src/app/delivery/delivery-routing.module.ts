import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cylinder-trace',
    pathMatch: 'full'
  },
  {
    path: 'cylinder-trace',
    component: CylinderTraceComponent
  },
  {
    path: 'cylinder-filling',
    component: CylinderFillingComponent
  },
  {
    path: '**',
    redirectTo: 'cylinder-trace',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
