import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';
import { BottleLibraryComponent } from './bottle-library/bottle-library.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    data: {
      title: '系统配置'
    },
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: '个人信息'
        },
      },
      {
        path: 'bottle-library',
        component: BottleLibraryComponent,
        data: {
          title: '供应站管理'
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
