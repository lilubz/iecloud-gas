import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';

import { CustomerModule } from './customer/customer.module';
import { CylinderModule } from './cylinder/cylinder.module';
import { ArchiveComponent } from './archive.component';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { CylinderOverviewService } from './cylinder/cylinder-overview/cylinder-overview.service';
import { CustomerOverviewService } from './customer/customer-overview/customer-overview.service';
import { GasHolderComponent } from './gasHolder/gasHolder.component';
import { GasHolderService } from './gasHolder/gasHolder.service';
import { FillingScaleListComponent } from './filling-scale-list/filling-scale-list.component';
import { GasHolderStationComponent } from './gas-holder-station/gas-holder-station.component';
import { SupplyStationComponent } from './supply-station/supply-station.component';
import { DispatcherComponent } from './employee/dispatcher.component';
import { CarComponent } from './car/car.component';
import { GasHolderStationDetailComponent } from './gas-holder-station/gas-holder-station-detail/gas-holder-station-detail.component';
import { DispatcherDetailComponent } from './employee/dispatcher-detail/dispatcher-detail.component';
import { SupplyStationDetailComponent } from './supply-station/supply-station-detail/supply-station-detail.component';


@NgModule({
  imports: [
    SharedModule,
    CylinderModule,
    CustomerModule,
    EnterpriseModule,
    ArchiveRoutingModule,
  ],
  declarations: [
    ArchiveComponent,
    GasHolderComponent,
    DispatcherComponent,
    CarComponent,
    FillingScaleListComponent,
    GasHolderStationComponent,
    SupplyStationComponent,
    GasHolderStationDetailComponent,
    DispatcherDetailComponent,
    SupplyStationDetailComponent,
  ],
  providers: [
    CylinderOverviewService,
    CustomerOverviewService,
    GasHolderService,
  ]
})
export class ArchiveModule { }
