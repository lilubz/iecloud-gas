import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { VerificationRoutingModule } from './verification-routing.module';

import { CustomerService } from './customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { VerificationComponent } from './verification.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CylinderTagComponent } from './cylinder-tag/cylinder-tag.component';
import { CylinderVerificationService } from './cylinder-verification/cylinder-verification.service';
import { CylinderVerificationComponent } from './cylinder-verification/cylinder-verification.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VerificationRoutingModule
  ],
  declarations: [
    VerificationComponent,
    CustomerComponent,
    UserCardComponent,
    CylinderVerificationComponent,
    CylinderTagComponent
  ],
  providers: [
    CustomerService,
    CylinderVerificationService
  ]
})
export class VerificationModule { }
