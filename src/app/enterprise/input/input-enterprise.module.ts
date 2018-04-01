import { UserInfoResolverService } from './user-info/user-info-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { InputRoutingModule } from './input-routing.module';

import { UserInfoService } from './user-info/user-info.service';
import { UserStateService } from './../../core/userState.service';
import { UserCardService } from './user-card/user-card.service';

import { InputComponent } from './input.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TransportCarComponent } from './transport-car/transport-car.component';
import { DeliveryCarComponent } from './delivery-car/delivery-car.component';
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
    TransportCarComponent,
    DeliveryCarComponent
  ],
  providers: [
    UserInfoService,
    UserInfoResolverService,
    UserStateService,
    UserCardService
  ]
})
export class InputModule { }
