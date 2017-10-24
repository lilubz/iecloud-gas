import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';

import { CustomerModule } from './customer/customer.module';
import { CylinderModule } from './cylinder/cylinder.module';
import { ArchiveComponent } from './archive.component';

@NgModule({
  imports: [
    SharedModule,
    ArchiveRoutingModule,
    CylinderModule,
    CustomerModule
  ],
  declarations: [
    ArchiveComponent,
  ],
  providers: [

  ]
})
export class ArchiveModule { }
