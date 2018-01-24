import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';
import { DispatcherComponent } from './dispatcher/dispatcher.component';

@NgModule({
  imports: [
    SharedModule,
    EmployeeRoutingModule,
  ],
  declarations: [
    EmployeeComponent,
    DispatcherComponent
  ],
  providers: [],
  exports: [
    // CylinderComponent
  ]
})
export class EmployeeModule { }
