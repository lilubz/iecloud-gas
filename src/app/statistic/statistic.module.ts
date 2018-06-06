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
import { IndustryAnalyzeComponent } from './industry-analyze/industry-analyze.component';
import { SafetyCheckComponent } from './safety-check/safety-check.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailComponent } from './add-customer/detail/detail.component';
import { LicenseWarningComponent } from './license-warning/license-warning.component';
import { CityOverviewComponent } from './city-overview/city-overview.component';
import { PartitionOverviewComponent } from './partition-overview/partition-overview.component';

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
    IndustryAnalyzeComponent,
    SafetyCheckComponent,
    AddCustomerComponent,
    DetailComponent,
    LicenseWarningComponent,
    CityOverviewComponent,
    PartitionOverviewComponent,
  ],
  providers: [

  ]
})
export class StatisticModule { }
