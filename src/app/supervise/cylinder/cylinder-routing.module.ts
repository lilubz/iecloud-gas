import { CylinderComponent } from './cylinder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderOverviewComponent } from './cylinder-overview/cylinder-overview.component';
import { CylinderListComponent } from './cylinder-list/cylinder-list.component';
import { CylinderDetailComponent } from './cylinder-detail/cylinder-detail.component';
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
        component: CylinderOverviewComponent,
        data: {
          title: '气瓶概览'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CylinderRoutingModule { }
