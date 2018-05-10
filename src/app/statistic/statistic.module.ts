import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { SharedModule } from './../shared/shared.module';

import { StatisticComponent } from './statistic.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { AffairComponent } from './affair/affair.component';

import { EnterpriseComponent as CylinderEnterpriseComponent } from './cylinder/enterprise/enterprise.component';
import { CylinderStorageComponent } from './cylinder/cylinder-storage/cylinder-storage.component';
import { StorageDistributionComponent } from './cylinder/storage-distribution/storage-distribution.component';
import { CustomerComponent } from './cylinder/customer/customer.component';
import { CurrentWarningComponent } from './current-warning/current-warning.component';
import { HistoryWarningComponent } from './history-warning/history-warning.component';
import { SuperviseDataComponent } from './supervise-data/supervise-data.component';
import { LicenseComponent } from './supervise-data/license/license.component';
import { GcDetectionComponent } from './supervise-data/gc-detection/gc-detection.component';
import { GcScrapComponent } from './supervise-data/gc-scrap/gc-scrap.component';
import { IndustryAnalyzeComponent } from './industry-analyze/industry-analyze.component';
import { SafetyCheckComponent } from './safety-check/safety-check.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailComponent } from './add-customer/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatisticRoutingModule
  ],
  declarations: [
    StatisticComponent,
    EnterpriseComponent,
    CylinderComponent,
    AffairComponent,
    CylinderEnterpriseComponent,
    CylinderStorageComponent,
    StorageDistributionComponent,
    CustomerComponent,
    CurrentWarningComponent,
    HistoryWarningComponent,
    SuperviseDataComponent,
    LicenseComponent,
    GcDetectionComponent,
    GcScrapComponent,
    IndustryAnalyzeComponent,
    SafetyCheckComponent,
    AddCustomerComponent,
    DetailComponent,
  ],
  providers: [

  ]
})
export class StatisticModule { }
