import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { InputRoutingModule } from './input-routing.module';

import { InputComponent } from './input.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CylinderInfoComponent } from './cylinder-info/cylinder-info.component';
import { CylinderTagComponent } from './cylinder-tag/cylinder-tag.component';
import { UploadComponent } from './upload/upload.component';
@NgModule({
  imports: [
    CommonModule,
    InputRoutingModule,
    SharedModule,
  ],
  declarations: [
    InputComponent,
    UserCardComponent,
    UserInfoComponent,
    CylinderInfoComponent,
    CylinderTagComponent,
    UploadComponent,
  ]
})
export class InputModule { }
