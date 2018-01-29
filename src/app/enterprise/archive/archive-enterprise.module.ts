import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';

import { CustomerModule } from './customer/customer.module';
import { CylinderModule } from './cylinder/cylinder.module';
import { EmployeeModule } from './employee/employee.module';
import { ArchiveComponent } from './archive.component';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { CarModule } from './car/car.module';


@NgModule({
  imports: [
    SharedModule,
    CarModule,
    CylinderModule,
    CustomerModule,
    EmployeeModule,
    EnterpriseModule,
    ArchiveRoutingModule,
  ],
  declarations: [
    ArchiveComponent,
  ],
  providers: [
  ]
})
export class ArchiveModule { }
