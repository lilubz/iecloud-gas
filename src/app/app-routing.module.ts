import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'user/register',
        component: LayoutComponent
      },
      {
        path: 'user/identification',
        component: LayoutComponent
      },
      {
        path: 'gas-cylinder/information',
        component: LayoutComponent
      },
      {
        path: 'gas-cylinder/tag',
        component: LayoutComponent
      },
      {
        path: 'information/export',
        component: LayoutComponent
      },
      {
        path: 'information/import',
        component: LayoutComponent
      },
      {
        path: 'system/management',
        component: LayoutComponent
      },
      {
        path: 'system/log',
        component: LayoutComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    // component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule { }
