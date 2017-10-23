import { CylinderComponent } from './cylinder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderListComponent } from './cylinder-list/cylinder-list.component';
import { CylinderDetailComponent } from './cylinder-detail/cylinder-detail.component';
import { CylinderOverviewEnterpriseComponent } from './cylinder-overview/cylinder-overview-enterprise.component';
import { CylinderOverviewCountyComponent } from './cylinder-overview/cylinder-overview-county.component';
const routes: Routes = [
  {
    path: 'cylinder',
    redirectTo: 'cylinder/overview',
    pathMatch: 'full'
  },
  {
    path: 'cylinder',
    component: CylinderComponent,
    data: {
      title: '监管档案'
    },
    children: [
      {
        path: 'detail',
        component: CylinderDetailComponent,
        data: {
          title: '气瓶详情'
        },
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CylinderRoutingModule { }
