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
import { CylinderWarningComponent } from './cylinder-warning/cylinder-warning.component';
import { FillingScaleModule } from './filling-scale/filling-scale.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ReportModule,
    CollaborativeModule,
    FillingScaleModule,
    GovAffairsRoutingModule,
  ],
  declarations: [
    GovAffairsComponent,
    CylinderWarningComponent,
    // CylinderTraceComponent,
    // CylinderFillingComponent
  ],
  providers: [
    // CylinderTraceService,
    // CylinderFillingService
  ]
})
export class GovAffairsModule { }
