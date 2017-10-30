import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'archive',
        loadChildren: './archive/archive.module#ArchiveModule',
        data: {
          title: '基础档案'
        }
      },
      // {
      //   path: 'system',
      //   loadChildren: './system/system.module#SystemModule',
      //   data: {
      //     title: '系统配置'
      //   }
      // },
      {
        path: 'delivery',
        component: PageNotFoundComponent
      },
      {
        path: 'supervise',
        component: PageNotFoundComponent
      },
      {
        path: 'visualization',
        component: PageNotFoundComponent
      },
      {
        path: 'statistic',
        component: PageNotFoundComponent
      },
      {
        path: 'system',
        component: PageNotFoundComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'archive'
  // }
];

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
