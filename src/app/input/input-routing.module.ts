import { UserInfoResolverService } from './user-info/user-info-resolver.service';
import { UserInfoService } from './user-info/user-info.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CylinderInfoComponent } from './cylinder-info/cylinder-info.component';
import { CylinderTagComponent } from './cylinder-tag/cylinder-tag.component';
import { InputComponent } from './input.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UploadComponent } from './upload/upload.component';
import { ExportComponent } from './export/export.component';
import { TransportCarComponent } from './transport-car/transport-car.component';
import { DeliveryCarComponent } from './delivery-car/delivery-car.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-info',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InputComponent,
    children: [
      {
        path: 'user-info',
        component: UserInfoComponent,
        resolve: { userType: UserInfoResolverService }
      },
      {
        path: 'user-card',
        component: UserCardComponent
      },
      {
        path: 'delivery-car',
        component: DeliveryCarComponent
      },
      {
        path: 'transport-car',
        component: TransportCarComponent
      },
      // {
      //   path: 'cylinder-info',
      //   component: CylinderInfoComponent
      // },
      // {
      //   path: 'cylinder-tag',
      //   component: CylinderTagComponent
      // },
      // {
      //   path: 'upload',
      //   component: UploadComponent
      // },
      // {
      //   path: 'export',
      //   component: ExportComponent
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
export class InputRoutingModule { }
