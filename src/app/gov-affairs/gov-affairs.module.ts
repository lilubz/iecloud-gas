import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovAffairsComponent } from './gov-affairs.component';
import { GovAffairsRoutingModule } from './gov-affairs-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { CylinderTraceComponent } from './cylinder-trace/cylinder-trace.component';
// import { CylinderTraceService } from './cylinder-trace/cylinder-trace.service';
// import { CylinderFillingComponent } from './cylinder-filling/cylinder-filling.component';
// import { CylinderFillingService } from './cylinder-filling/cylinder-filling.service';
import { CollaborativeModule } from './collaborative/collaborative.module';
import { ReportModule } from './report/report.module';
import { WarningModule } from './warning/warning.module';
import { FillingScaleModule } from './filling-scale/filling-scale.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportModule,
    WarningModule,
    CollaborativeModule,
    FillingScaleModule,
    GovAffairsRoutingModule,
  ],
  declarations: [
    GovAffairsComponent,
    // CylinderTraceComponent,
    // CylinderFillingComponent
  ],
  providers: [
    // CylinderTraceService,
    // CylinderFillingService
  ]
})
export class GovAffairsModule { }
