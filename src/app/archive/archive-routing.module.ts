import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderComponent } from './cylinder/cylinder.component';
import { ArchiveComponent } from './archive.component';
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
    path: '**',
    redirectTo: 'cylinder/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
