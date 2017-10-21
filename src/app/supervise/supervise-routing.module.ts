import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderComponent } from './cylinder/cylinder.component';
import { SuperviseComponent } from './supervise.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cylinder',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperviseRoutingModule { }
