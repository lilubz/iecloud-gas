import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';

import { DeliveryComponent } from './delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { CylinderRecordComponent } from './cylinder-trace/cylinder-record/cylinder-record.component';
import { CylinderHistoryComponent } from './cylinder-trace/cylinder-history/cylinder-history.component';

import { CylinderTraceService } from './cylinder-trace/cylinder-trace.service';
import { DashboardService } from './dashboard/dashboard.service';
import { CylinderFillingComponent } from './cylinder-trace/cylinder-filling/cylinder-filling.component';
import { MapComponent } from './map/map.component';

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
    CylinderRecordComponent,
    CylinderHistoryComponent,
    CylinderFillingComponent,
    MapComponent
  ],
  providers: [
    DashboardService,
    CylinderTraceService,
  ]
})
export class DeliveryModule { }
