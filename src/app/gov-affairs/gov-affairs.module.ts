import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovAffairsComponent } from './gov-affairs.component';
import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
import { GovAffairsRoutingModule } from './gov-affairs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CylinderTraceService } from './cylinder-trace/cylinder-trace.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GovAffairsRoutingModule
  ],
  declarations: [
    GovAffairsComponent,
    CylinderTraceComponent
  ],
  providers: [
    CylinderTraceService
  ]
})
export class GovAffairsModule { }
