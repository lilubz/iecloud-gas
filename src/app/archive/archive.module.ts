import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';

import { CustomerModule } from './customer/customer.module';
import { CylinderModule } from './cylinder/cylinder.module';
import { ArchiveComponent } from './archive.component';

@NgModule({
  imports: [
    SharedModule,
    CylinderModule,
    CustomerModule,

    ArchiveRoutingModule,
  ],
  declarations: [
    ArchiveComponent,
  ],
  providers: [

  ]
})
export class ArchiveModule { }
