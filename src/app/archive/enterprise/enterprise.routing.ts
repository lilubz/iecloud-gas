import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseComponent, } from './enterprise.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: 'enterprise',
    redirectTo: 'enterprise/detail',
    pathMatch: 'full'
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent,
    data: {
      title: '企业详情'
    },
    children: [
      {
        path: 'detail',
        component: EnterpriseDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
