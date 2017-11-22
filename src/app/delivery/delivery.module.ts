import { DashboardService } from './dashboard/dashboard.service';
import { SharedModule } from './../shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    SharedModule,
  ],
  declarations: [
    DeliveryComponent,
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DeliveryModule { }
