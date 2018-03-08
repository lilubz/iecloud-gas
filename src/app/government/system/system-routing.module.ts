import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';
import { BottleLibraryComponent } from './bottle-library/bottle-library.component';
import { EnterpriseManagementComponent } from './enterprise-management/enterprise-management.component';
import { AccountDetailComponent } from './enterprise-management/account-detail/account-detail.component';
import { EnterpriseFoundComponent } from './enterprise-management/enterprise-found/enterprise-found.component';
import { AccountOpeningComponent } from './enterprise-management/account-opening/account-opening.component';

const routes: Routes = [
  {
    path: '',
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
        path: 'message',
        component: MessagesComponent,
        data: {
          title: '通知公告'
        },
      },
      {
        path: 'enterprise-management',
        component: EnterpriseManagementComponent,
        data: {
          title: '企业管理'
        },
        children: [
          {
            path: '',
            redirectTo: 'account-detail',
            pathMatch: 'full'
          },
          {
            path: 'account-detail',
            component: AccountDetailComponent,
            data: {
              title: '账号概览'
            },
          },
          {
            path: 'enterprise-found',
            component: EnterpriseFoundComponent,
            data: {
              title: '企业创建'
            },
          },
          {
            path: 'account-open',
            component: AccountOpeningComponent,
            data: {
              title: '企业账号开通'
            },
          },
        ]
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
