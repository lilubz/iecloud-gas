import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderComponent } from './cylinder/cylinder.component';
import { ArchiveComponent } from './archive.component';
const routes: Routes = [
  {
    path: 'cylinder',
    redirectTo: 'cylinder',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
