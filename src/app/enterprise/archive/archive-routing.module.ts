import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderComponent } from './cylinder/cylinder.component';
import { EmployeeComponent } from './employee/employee.component';
import { ArchiveComponent } from './archive.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
console.log('object');
const routes: Routes = [
  {
    path: 'cylinder',
    redirectTo: 'cylinder/overview',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    redirectTo: 'customer/overview',
    pathMatch: 'full'
  },
  {
    path: 'enterprise',
    redirectTo: 'enterprise/detail',
    pathMatch: 'full'
  },
  {
    path: 'car',
    component: PageNotFoundComponent
  },
  {
    path: 'employee',
    redirectTo: 'employee/dispatcher',
    pathMatch: 'full'
  },
  {
    path: 'media',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'cylinder/overview',
    pathMatch: 'full'
    // component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }