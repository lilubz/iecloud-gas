import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomerComponent
  ]
})
export class CustomerModule { }
