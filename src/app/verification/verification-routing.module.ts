import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationComponent } from './verification.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  {
    path: '',
    component: VerificationComponent,
    children: [
      // {
      //   path: 'customer',
      //   component:
      // },
      // {
      //   path: 'cylinder',
      //   component:
      // },
      // {
      //   path: 'delivery-man-verification',
      //   component:
      // },
      // {
      //   path: 'cylinder-tag-verification',
      //   component:
      // },
      // {
      //   path: 'user-card-verification',
      //   component:
      // },
    ]
  },
  {
    path: '**',
    redirectTo: 'user-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRoutingModule { }
