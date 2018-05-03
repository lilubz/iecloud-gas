import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';

import { CustomerModule } from './customer/customer.module';
import { CarModule } from './car/car.module';
import { CylinderModule } from './cylinder/cylinder.module';
import { EmployeeModule } from './employee/employee.module';
import { ArchiveComponent } from './archive.component';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { CylinderOverviewService } from './cylinder/cylinder-overview/cylinder-overview.service';
import { CustomerOverviewService } from './customer/customer-overview/customer-overview.service';
import { ComponentsModule } from '../components/components.module';
import { GasHolderComponent } from './gasHolder/gasHolder.component';
import { GasHolderService } from './gasHolder/gasHolder.service';
import { FillingScaleListComponent } from './filling-scale-list/filling-scale-list.component';
import { GasHolderStationComponent } from './gas-holder-station/gas-holder-station.component';
import { SupplyStationComponent } from './supply-station/supply-station.component';


@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    CylinderModule,
    CustomerModule,
    CarModule,
    EmployeeModule,
    EnterpriseModule,
    ArchiveRoutingModule,
  ],
  declarations: [
    ArchiveComponent,
    GasHolderComponent,
    FillingScaleListComponent,
    GasHolderStationComponent,
    SupplyStationComponent,
  ],
  providers: [
    CylinderOverviewService,
    CustomerOverviewService,
    GasHolderService,
  ]
})
export class ArchiveModule { }
