import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CylinderWarningComponent } from './cylinder-warning/cylinder-warning.component';
// import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
// import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'collaborative/my-affairs',
    pathMatch: 'full'
  },
  {
    path: 'cylinder-warning',
    redirectTo: 'cylinder-warning/1',
    pathMatch: 'full'
  },
  {
    path: 'cylinder-warning/:type',
    component: CylinderWarningComponent
  },
  // {
  //   path: 'cylinder-trace',
  //   component: CylinderTraceComponent
  // },
  // {
  //   path: 'cylinder-filling',
  //   component: CylinderFillingComponent
  // },
  {
    path: 'collaborative',
    redirectTo: 'collaborative/my-affairs',
    pathMatch: 'full'
  },
  {
    path: 'report',
    redirectTo: 'report/manage',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: 'collaborative/my-affairs',
  //   pathMatch: 'full'
  //   // component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovAffairsRoutingModule { }
