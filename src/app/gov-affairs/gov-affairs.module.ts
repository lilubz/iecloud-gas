import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovAffairsComponent } from './gov-affairs.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { GovAffairsRoutingModule } from './gov-affairs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CylinderTraceService } from './cylinder-trace/cylinder-trace.service';
import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
import { CylinderFillingService } from './cylinder-filling/cylinder-filling.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GovAffairsRoutingModule
  ],
  declarations: [
    GovAffairsComponent,
    CylinderTraceComponent,
    CylinderFillingComponent
  ],
  providers: [
    CylinderTraceService,
    CylinderFillingService
  ]
})
export class GovAffairsModule { }
