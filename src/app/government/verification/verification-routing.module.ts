import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationComponent } from './verification.component';
import { CustomerComponent } from './customer/customer.component';
import { UserCardComponent } from './user-card/user-card.component';
const routes: Routes = [
  {
    path: '',
    component: VerificationComponent,
    data: {
      title: '审核管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'full'
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: '用户信息'
        }
      },
      {
        path: 'user-card',
        component: UserCardComponent,
        data: {
          title: '用户认证卡审核'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRoutingModule { }
