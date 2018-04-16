import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { DispatcherComponent } from './dispatcher/dispatcher.component';

const routes: Routes = [
  {
    path: 'employee',
    redirectTo: 'employee/dispatcher',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    data: {
      title: '监管档案'
    },
    children: [
      {
        path: 'dispatcher',
        component: DispatcherComponent,
        data: {
          title: '气瓶详情'
        }
      },
    ]
  },
  // {
  //   path: 'detail/',
  //   redirectTo: 'detail'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
