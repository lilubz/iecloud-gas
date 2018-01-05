import { DashboardService } from './dashboard/dashboard.service';
import { SharedModule } from './../shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
import { CylinderTraceService } from './cylinder-trace/cylinder-trace.service';
import { CylinderFillingService } from './cylinder-filling/cylinder-filling.service';

@NgModule({
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    SharedModule,
  ],
  declarations: [
    DeliveryComponent,
    DashboardComponent,
    CylinderTraceComponent,
    CylinderFillingComponent
  ],
  providers: [
    DashboardService,
    CylinderTraceService,
    CylinderFillingService
  ]
})
export class DeliveryModule { }
