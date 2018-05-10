import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { VerificationRoutingModule } from './verification-routing.module';

import { VerificationComponent } from './verification.component';
import { UserCardComponent } from './user-card/user-card.component';
import { RangeNumberPipe } from './range-number.pipe';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VerificationRoutingModule
  ],
  declarations: [
    VerificationComponent,
    UserCardComponent,
    RangeNumberPipe,
    UserCardComponent
  ],
  providers: [
  ]
})
export class VerificationModule { }
