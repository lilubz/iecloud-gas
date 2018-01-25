import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './core/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'government',
    loadChildren: './government/government.module#GovernmentModule',
    canActivate: [AuthGuard, PermissionGuard]
  },
  {
    path: 'enterprise',
    loadChildren: './enterprise/enterprise.module#EnterpriseModule',
    canActivate: [AuthGuard, PermissionGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
