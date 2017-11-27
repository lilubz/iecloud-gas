import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cylinder-trace',
    pathMatch: 'full'
  },
  {
    path: 'cylinder-trace',
    component: CylinderTraceComponent
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
export class GovAffairsRoutingModule { }
