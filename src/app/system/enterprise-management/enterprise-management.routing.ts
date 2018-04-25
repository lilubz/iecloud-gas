import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseManagementComponent, } from './enterprise-management.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { EnterpriseFoundComponent } from './enterprise-found/enterprise-found.component';
import { AccountOpeningComponent } from './account-opening/account-opening.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: 'enterprise-management',
    redirectTo: 'enterprise-management/account-detail',
    pathMatch: 'full'
  },
  {
    path: 'enterprise-management',
    component: EnterpriseManagementComponent,
    data: {
      title: '企业管理'
    },
    children: [
      {
        path: 'account-detail',
        component: AccountDetailComponent
      },
      {
        path: 'enterprise-found',
        component: EnterpriseFoundComponent
      },
      {
        path: 'account-open',
        component: AccountOpeningComponent
      },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnterpriseManagementRoutingModule { }
