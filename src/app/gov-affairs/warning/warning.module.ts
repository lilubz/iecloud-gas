import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { WarningComponent } from './warning.component';
import { GcExcessComponent } from './gc-excess/gc-excess.component';
import { ThresholdComponent } from './threshold/threshold.component';
import { GcDetectionComponent } from './gc-detection/gc-detection.component';
import { GcScrapComponent } from './gc-scrap/gc-scrap.component';
import { LicenseComponent } from './license/license.component';
import { WarningService } from './warning.service';
import { WarningRecordComponent } from './warning-record/warning-record.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    WarningComponent,
    GcExcessComponent,
    ThresholdComponent,
    GcDetectionComponent,
    GcScrapComponent,
    LicenseComponent,
    WarningRecordComponent,
  ],
  providers: [
    WarningService
  ]
})
export class WarningModule { }
