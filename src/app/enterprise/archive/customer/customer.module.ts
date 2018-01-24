import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerOverviewService } from './customer-overview/customer-overview.service';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerOverviewEnterpriseComponent } from './customer-overview/customer-overview-enterprise.component';
import { CustomerOverviewCountyComponent } from './customer-overview/customer-overview-county.component';
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerOverviewEnterpriseComponent,
    CustomerOverviewCountyComponent
  ],
  providers: [
    CustomerOverviewService
  ]
})
export class CustomerModule { }
