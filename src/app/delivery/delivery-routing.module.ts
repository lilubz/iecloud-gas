import { CylinderHistoryComponent } from './cylinder-trace/cylinder-history/cylinder-history.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { CylinderRecordComponent } from './cylinder-trace/cylinder-record/cylinder-record.component';
import { CylinderFillingComponent } from './cylinder-trace/cylinder-filling/cylinder-filling.component';
import { MapComponent } from './map/map.component';
import { SecurityQueryComponent } from './security-query/security-query.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '监管查询'
    },
    children: [
      {
        path: '',
        redirectTo: 'cylinder-trace',
        pathMatch: 'full'
      },
      {
        path: 'cylinder-trace',
        component: CylinderTraceComponent,
        data: {
          title: '气瓶追溯'
        },
        children: [
          {
            path: '',
            redirectTo: 'cylinder-filling',
          },
          // {
          //   path: 'state',
          //   component: CylinderStateComponent
          // },
          // {
          //   path: 'cylinder-number',
          //   component: CylinderNumberComponent
          // },
          {
            path: 'cylinder-filling',
            component: CylinderFillingComponent,
            data: {
              title: '充装记录',
              keep: true
            }
          },
          {
            path: 'cylinder-record/:type',
            component: CylinderRecordComponent,
            data: {
              title: '流转记录'
            }
          },
          {
            path: 'cylinder-history',
            component: CylinderHistoryComponent,
            data: {
              title: '按条码查询',
              keep: true
            }
          },
          // {
          //   path: '**',
          //   redirectTo: 'cylinder-history',
          //   pathMatch: 'full'
          // }
        ]
      },
      {
        path: 'map',
        component: MapComponent,
        data: {
          title: '地图轨迹'
        }
      },
      {
        path: 'security-query',
        component: SecurityQueryComponent,
        data: {
          title: '安检信息查询'
        }
      },
      {
        path: '**',
        redirectTo: 'cylinder-trace/state',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
