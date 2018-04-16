import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CylinderInfoComponent } from './cylinder-info/cylinder-info.component';
import { DeliveryCarComponent } from './delivery-car/delivery-car.component';
import { TransportCarComponent } from './transport-car/transport-car.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInfoResolverService } from './user-info/user-info-resolver.service';
import { UserInfoService } from './user-info/user-info.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InputRoutingModule
  ],
  declarations: [
    InputComponent,
    UserInfoComponent,
    CylinderInfoComponent,
    DeliveryCarComponent,
    TransportCarComponent,
    UserCardComponent,
    DeliveryCarComponent,
    CylinderInfoComponent
  ],
  providers: [
    UserInfoService,
    UserInfoResolverService,
  ]
})
export class InputModule { }
