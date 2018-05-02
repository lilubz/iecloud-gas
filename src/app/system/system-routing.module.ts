import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';
import { BottleLibraryComponent } from './bottle-library/bottle-library.component';
import { EnterpriseManagementComponent } from './enterprise-management/enterprise-management.component';
import { AccountDetailComponent } from './enterprise-management/account-detail/account-detail.component';
import { EnterpriseFoundComponent } from './enterprise-management/enterprise-found/enterprise-found.component';
import { AccountOpeningComponent } from './enterprise-management/account-opening/account-opening.component';
import { GasBusinessLicenseComponent } from './gas-business-license/gas-business-license.component';
import { SystemUserComponent } from './system-user/system-user.component';
import { UserSearchComponent } from './system-user/user-search/user-search.component';
import { UserOpeningComponent } from './system-user/user-opening/user-opening.component';
import { SettingManagementComponent } from './setting-management/setting-management.component';
import { GISSettingComponent } from './setting-management/GIS-setting/GIS-setting.component';

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
      {
        path: 'gas-business-license',
        component: GasBusinessLicenseComponent,
        data: {
          title: '燃气经营许可证管理'
        }
      },
      {
        path: 'system-user',
        component: SystemUserComponent,
        data: {
          title: '政府用户管理'
        },
        children: [
          {
            path: '',
            redirectTo: 'user-search',
            pathMatch: 'full'
          },
          {
            path: 'user-search',
            component: UserSearchComponent,
            data: {
              title: '账号概览'
            },
          },
          {
            path: 'user-opening',
            component: UserOpeningComponent,
            data: {
              title: '政府账号开通'
            },
          },
        ]
      },
      {
        path: 'setting',
        component: SettingManagementComponent,
        data: {
          title: '配置管理'
        },
        children: [
          {
            path: '',
            redirectTo: 'GIS-setting',
            pathMatch: 'full'
          },
          {
            path: 'GIS-setting',
            component: GISSettingComponent,
            data: {
              title: 'GIS默认图层配置管理'
            },
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
