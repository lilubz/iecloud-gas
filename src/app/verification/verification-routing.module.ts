import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationComponent } from './verification.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CylinderTagComponent } from './cylinder-tag/cylinder-tag.component';
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
      {
        path: 'cylinder-tag',
        component: CylinderTagComponent
      },
      {
        path: 'user-card',
        component: UserCardComponent
      },
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
