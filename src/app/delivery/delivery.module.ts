import { CylinderNumberComponent } from './cylinder-trace/cylinder-number/cylinder-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';

import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { CylinderStateComponent } from './cylinder-trace/cylinder-state/cylinder-state.component';
import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
import { CylinderRecordComponent } from './cylinder-trace/cylinder-record/cylinder-record.component';
import { CylinderHistoryComponent } from './cylinder-trace/cylinder-history/cylinder-history.component';

import { CylinderTraceService } from './cylinder-trace/cylinder-trace.service';
import { CylinderFillingService } from './cylinder-filling/cylinder-filling.service';
import { DashboardService } from './dashboard/dashboard.service';

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
    CylinderStateComponent,
    CylinderNumberComponent,
    CylinderFillingComponent,
    CylinderRecordComponent,
    CylinderHistoryComponent
  ],
  providers: [
    DashboardService,
    CylinderTraceService,
    CylinderFillingService
  ]
})
export class DeliveryModule { }
